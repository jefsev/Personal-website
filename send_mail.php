<?php


if ( preg_match( "/[\r\n]/", $name ) || preg_match( "/[\r\n]/", $email ) ) {
header( "Location: https://google.nl" );
}

if (isset($_REQUEST['email'])) {

	$admin_email = "jeffrey@websev.nl";
	$email = $_REQUEST['email'];
	$name = $_REQUEST['name'];
	$message = $_REQUEST['message'];
	$subject = 'WEBSEV website-formulier';

	mail($admin_email , $subject, $message, "From:" .$email );
}



?>
