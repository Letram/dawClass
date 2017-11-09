<?php
header("Content-type: text/xml");
$names = array ("John Smith", "John Jones", "Jane Smith", "Jane Tillman",
"Abraham Lincoln", "Sally Johnson", "Kilgore Trout",
"Bob Atkinson", "Joe Cool", "Dorothy Barnes",
"Elizabeth Carlson", "Frank Dixon", "Gertrude East",
"Harvey Frank", "Inigo Montoya", "Jeff Austin",
"Lynn Arlington", "Michael Washington", "Nancy West" );

$query=$_GET["query"];
$resp =array();

if (!empty($query)){
	while (list($k,$v)=each($names)) {
		if (stristr($v,$query)) {
			array_push($resp,array("nombre"=>$v));
		}
	}
}
echo json_encode($resp);
?>
