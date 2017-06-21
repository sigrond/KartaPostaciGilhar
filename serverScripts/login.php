<?php
error_reporting(E_ALL);
header('Content-type: application/json');
if(isset($_GET["name"]) && isset($_GET["pswd"]))
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
			if($row["pswd"]===$_GET["pswd"])
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
echo $_GET['callback'] . '('.json_encode($arr).')';
?>