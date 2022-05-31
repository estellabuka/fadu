<?php

$uri = $_SERVER[REQUEST_URI];

if ($uri === '/en') {
    echo file_get_contents("en.html");	
} else {
	echo file_get_contents("ua.html");
}
