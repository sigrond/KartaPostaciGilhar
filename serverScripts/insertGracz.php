<?php
	error_reporting(E_ALL);
	$servername = "mysql.cba.pl";
	$username = "sigrond";
	include "configs/vars.php";
	$db_name="sigrond";
	
	$conn = mysqli_connect($servername, $username, $password);
	mysqli_select_db($conn, $db_name);
	
	if (!$conn) {
		echo "DBCONNECTIONERROR\n";
		echo mysqli_connect_error();
	}
	
	$sql = "INSERT INTO gracz (name, pswd, mail) VALUES('admin','admin','admin@admin')";
	$result = mysqli_query($conn, $sql);
	
	if ($result === false) {
		//error
		echo "QUERYERROR\n";
		echo mysqli_error($conn);
	}
	else {
		//success
		echo "QUERYSUCCESS";
	}
	mysqli_close($conn);
?>