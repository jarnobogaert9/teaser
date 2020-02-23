<?php
$mysqli = mysqli_connect("dt5.ehb.be", "1920WEBINT002", "14853729", "1920WEBINT002");

if ($mysqli->connect_errno) {
	echo "Failed to connect to MySQL: (".$mysqli->connect_errno.")".$mysqli->connect_error;
}
	
$query = $mysqli->prepare("INSERT INTO subscribed_emails(`email`) VALUES (?)");
$query->bind_param('s', $_POST['email']);
if (!$query->execute()){
    echo $query->error;
}
$query->close();
?>