<?php

$people = json_decode(file_get_contents("people.json"));
$pageCount = ceil(count($people) / 3);

$page = isset($_GET["page"]) ? $_GET["page"] : 0;
$page = $page < 0 ? 0 : $page;
$page = $page >= $pageCount ? $pageCount - 1 : $page;

if (count($_POST)) {
	$person = new StdClass();
	$person->name = htmlentities($_POST["name"]);
	$person->location = htmlentities($_POST["location"]);
	$person->browser = htmlentities($_POST["browser"]);
	$people[] = $person;
	
	$fp = fopen("people.json", "w+");
	fwrite($fp, json_encode($people));
	fclose($fp);
}

$people = array_reverse($people);
$people = array_slice($people, $page * 3, 3);

if ($_SERVER["HTTP_X_REQUESTED_WITH"] == "XMLHttpRequest") {

	sleep(1);
	header("Content-type: application/json");
	$response = new StdClass();
	$response->page = $page;
	$response->people = $people;

	echo json_encode($response);

} else {
	include("template.php");
}

?>