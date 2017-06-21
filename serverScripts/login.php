<?php
header('Content-type: application/json');
if(isset($_GET["name"]) && isset($_GET["pswd"]))
{
	$servername = "localhost";
	$username = "sigrond";
	include "configs/vars.php";
	
	$conn = new mysqli($servername, $username, $password);
	
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
	$sql = "SELECT pswd FROM gracz WHERE name='"+$_GET["name"]+"'";
	$result = $conn->query($sql);
	
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