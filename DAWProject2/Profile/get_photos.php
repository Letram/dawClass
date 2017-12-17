<?php
	$array = array();
	$array[] = array(
		'src'=>"assets/img/DAWImages/Foto1.jpg",
		'h'=>"300",
		'w'=>"500"
	);
	$array[] = array(
		'src'=>"assets/img/DAWImages/Foto2.jpg",
		'h'=>"300",
		'w'=>"500"
	);
	$array[] = array(
		'src'=>"assets/img/DAWImages/Foto3.jpg",
		'h'=>"300",
		'w'=>"500"
	);
	$array[] = array(
		'src'=>"assets/img/DAWImages/Foto4.jpg",
		'h'=>"300",
		'w'=>"500"
	);
	echo json_encode($array);
?>