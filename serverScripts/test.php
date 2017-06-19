<?php
header('Content-type: application/json');
$arr = array ('a'=>'1','b'=>'2','c'=>'3','d'=>'4','e'=>'5');
echo $_GET['callback'] . '('.json_encode($arr).')';
?>