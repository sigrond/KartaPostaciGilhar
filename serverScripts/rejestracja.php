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

$sql = "SELECT 1 FROM gracz WHERE name='".$_POST["name"]."' LIMIT 1";
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
			$arr["status"]="LOGINALREADYEXISTS";
		}
} else {
	$arr["status"]="NORESULTS";
	$uprawnieniaPrawidlowe=true;
}

if($uprawnieniaPrawidlowe){
	$mySalt=mcrypt_create_iv(22);
	$options=[
		'cost' => 11,
		'salt' => $mySalt
	];
	$sql="INSERT INTO gracz (name, pswd, mail, salt) VALUES ('".$_POST["name"]."', '".password_hash($_POST["pswd"], PASSWORD_BCRYPT, $options)."', '".$_POST["mail"]."', '".$mySalt."')";
	//$arr["mySQLquery1"]=$sql;//po otwarciu do użytku koniecznie zakomentować - dobrze wiem jak to się skończy ;(
	$result = mysqli_query($conn, $sql);

	if ($result === false) {
		//error
		$arr["dbq1e1"]="QUERYERROR\n";
		$arr["dbq1e2"]=mysqli_error($conn);
	}
	else {
		//success
		$arr["dbq1s"]= "QUERYSUCCESS";
	}

}
mysqli_close($conn);

echo json_encode($arr);

?>