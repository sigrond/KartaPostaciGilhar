<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
$arr = array ('a'=>'1','b'=>'2','c'=>'3','d'=>'4','e'=>'5');
if(isset($_GET["name"]) && isset($_GET["pswd"]))
{
	$arr["name"]=$_GET["name"];
	$arr["pswd"]=$_GET["pswd"];
}
echo $_GET['callback'] . '('.json_encode($arr).')';
?>