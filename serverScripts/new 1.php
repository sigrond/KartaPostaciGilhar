<?php
header('Content-type: application/json');
if(isset($_GET["name"]) && isset($_GET["pswd"]))
{
	$arr["status"]="OK";
}
else
{
	$arr["status"]="NOTOK";
}
echo $_GET['callback'] . '('.json_encode($arr).')';
?>