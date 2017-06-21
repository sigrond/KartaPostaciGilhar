<?php
header('Content-type: application/json');
if(isset($_GET["name"]) && isset($_GET["pswd"]))
{
	$servername = "sigrond";
	$username = "sigrond";
	include "configs/vars.php";
	
	$conn = new mysqli($servername, $username, $password);
	
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
	$arr["status"]="OK";
}
else
{
	$arr["status"]="NOLOGINORPSWD";
}
echo $_GET['callback'] . '('.json_encode($arr).')';
?>