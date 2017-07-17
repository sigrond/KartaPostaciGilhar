<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
//error_reporting(E_ALL);
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
//echo $_GET;
$file = file_get_contents ("../".$_GET["page"].".html");
//echo $file;

$arr["data"]=$file;
echo $_GET['callback'] . '('.json_encode($arr).')';
?>