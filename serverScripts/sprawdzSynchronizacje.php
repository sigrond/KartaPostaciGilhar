<?php

header('Content-type: application/json', true);
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

$arr = array ();



$servername = "mysql.cba.pl";
$username = "sigrond";
include "configs/vars.php";
$db_name="sigrond";



$conn = mysqli_connect($servername, $username, $password);
mysqli_select_db($conn, $db_name);

if (!$conn) {
	$arr["dbce1"]="DBCONNECTIONERROR\n";
	$arr["dbce2"]=mysqli_connect_error();
}

$sql = "SELECT * FROM gracz WHERE name='".$_POST["name"]."'";
$arr["mySQLquery0"]=$sql;
$result = mysqli_query($conn, $sql);
if ($result === false) {
	//error
	$arr["dbq0e1"]="QUERYERROR\n";
	$arr["dbq0e2"]=mysqli_error($conn);
}
else {
	//success
	$arr["dbq0s"]= "QUERYSUCCESS";
}
$uprawnieniaPrawidlowe=false;
$id_gracza=0;
if ($result->num_rows > 0) {
		// output data of each row
		while($row = $result->fetch_assoc()) {
			if(password_verify($_POST["pswd"], $row["pswd"]))
			{
				$arr["status"]="OK";
				$uprawnieniaPrawidlowe=true;
				$id_gracza=$row["id"];
			}
			else
			{
				$arr["status"]="WRONGPSWD";
			}
		}
} else {
	$arr["status"]="NOSUCHLOGIN";
}

if($uprawnieniaPrawidlowe){
	//chyba można by yżywać wcześniejszego zapytania
	$sql="SELECT hash FROM gracz WHERE id='".$id_gracza."'";
	//$sql = "INSERT INTO DanePostaci".." (id, myGenericID0, myGenericID4) VALUES(1,'".$_POST["myGenericID0"]."','".$_POST["myGenericID4"]."')";
	$arr["mySQLquery"]=$sql;
	$result = mysqli_query($conn, $sql);

	if ($result === false) {
		//error
		$arr["dbqe1"]="QUERYERROR\n";
		$arr["dbqe2"]=mysqli_error($conn);
	}
	else {
		//success
		$arr["dbqs"]= "QUERYSUCCESS";
	}
	if ($result->num_rows > 0) {
		// output data of each row
		$row = $result->fetch_assoc();
		$arr["hash"]=$row["hash"];
	}
}

mysqli_close($conn);

echo json_encode($arr);

?>