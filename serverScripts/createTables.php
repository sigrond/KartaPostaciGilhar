<?php

header('Content-type: application/json', true);
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

$arr = array ();

//$arr["fields"]=$_POST["fields"];

$myFields=json_decode($_POST["fields"],true);



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
foreach($myFields as $key => $value){

	$sqlFields="CREATE TABLE DanePostaci".$key." ( id INT PRIMARY KEY";
	//$sqlValues="VALUES(1";
	
	foreach($value as $fieldName => $fieldValue){
		$sqlFields.=", ".$fieldName." TEXT";
		//$sqlValues.=", '".$fieldValue."'";
	}
	$sql=$sqlFields.")";
	//$sql = "INSERT INTO DanePostaci".." (id, myGenericID0, myGenericID4) VALUES(1,'".$_POST["myGenericID0"]."','".$_POST["myGenericID4"]."')";
	$arr["mySQLquery".$key]=$sql;
	$result = mysqli_query($conn, $sql);

	if ($result === false) {
		//error
		$arr["dbq".$key."e1"]="QUERYERROR\n";
		$arr["dbq".$key."e2"]=mysqli_error($conn);
	}
	else {
		//success
		$arr["dbq".$key."s"]= "QUERYSUCCESS";
	}
}
}
mysqli_close($conn);

echo json_encode($arr);

?>