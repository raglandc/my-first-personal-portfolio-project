<?php 
ini_set("display_errors", 1);
ini_set("display_startup_errors", 1 );
error_reporting(E_ALL);


$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$from = "chrisragland97@gmail.com";
$to = 'chrisragland97@gmail.com';

$subject = "test";

$headers = 'From:'. $email;


$mail = mail( $to,  $subject,  $message, $headers,  $additional = ""); 



if($mail) {
   echo "message sent yayyyy" ;
} else { 
    echo "didnt work 😭";
}

?>