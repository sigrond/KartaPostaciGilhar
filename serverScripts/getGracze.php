<?php

//error_reporting(E_ALL);

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
if ($result->num_rows > 0) {
		// output data of each row
		while($row = $result->fetch_assoc()) {
			if(password_verify($_POST["pswd"], $row["pswd"]))
			{
				$arr["status"]="OK";
				if($row["uprawnienia"]=='admin')
				{
					$uprawnieniaPrawidlowe=true;
				}
				else
				{
					$arr["uprawnienia"]="NONADMIN";
				}
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
	
	$sql="SELECT id, name, mail, uprawnienia FROM gracz";
	$arr["mySQLquery1"]=$sql;
	$result = mysqli_query($conn, $sql);

	if ($result === false) {
		//error
		$arr["dbq1e1"]="QUERYERROR\n";
		$arr["dbq1e2"]=mysqli_error($conn);
	}
	else {
		//success
		$arr["dbq1s"]= "QUERYSUCCESS";
	
		if ($result->num_rows > 0) {
			// output data of each row
			$i=0;
			while($row = $result->fetch_assoc()) {
				$arr["data"][++$i]=$row;
			}
			
		}
		else {
			$arr["status"]="NODATA";
		}
	}

}
mysqli_close($conn);

echo json_encode($arr);

?>