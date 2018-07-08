<?php
error_reporting(E_ALL);
header('Content-type: application/json', true);
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
if(isset($_POST["name"]) && isset($_POST["pswd"]))
{
	$servername = "localhost";
	$username = "sigrond";
	include "configs/vars.php";
	$db_name="sigrond";
	
	$conn = new mysqli($servername, $username, $password, $db_name);
	
	if ($conn->connect_error) {
		$arr["status"]="DBCONNECTIONERROR";
		die("Connection failed: " . $conn->connect_error);
	}
	
	$sql = "SELECT * FROM gracz";
	$result = $conn->query($sql);
	
	if ($result === false) {
		//error
		$arr["status"]="QUERYERROR";
	}
	else {
		//success
		$arr["status"]="QUERYSUCCESS";
	}
	
	if ($result->num_rows > 0) {
		// output data of each row
		while($row = $result->fetch_assoc()) {
			if(password_verify($_POST["pswd"], trim($row["pswd"])))
			{
				$arr["status"]="OK";
			}
			else
			{
				$arr["status"]="WRONGPSWD";
			}
		}
	} else {
		$arr["status"]="NOSUCHLOGIN";
	}
	$conn->close();
	
	
}
else
{
	$arr["status"]="NOLOGINORPSWD";
}
echo json_encode($arr);
?>