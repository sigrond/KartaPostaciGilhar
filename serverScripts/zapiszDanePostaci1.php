<?php
//error_reporting(E_ALL);

header('Content-type: application/json', true);
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

//echo $_SERVER['REQUEST_METHOD'];
//echo $_POST;

$arr = array ('a'=>'1','b'=>'2');
$arr["CharT1"]=$_POST["CharT1"];



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
	
	$sql = "INSERT INTO DanePostaci1 (id, myGenericID0, myGenericID4) VALUES(1,'".$_POST["myGenericID0"]."','".$_POST["myGenericID4"]."')";
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
	mysqli_close($conn);
	
	echo json_encode($arr);
?>