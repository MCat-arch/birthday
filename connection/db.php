<?php
$host = 'localhost'; // your database host
$db = 'birthday_db'; // your database name
$user = 'username'; // your database username
$pass = 'password'; // your database password

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
