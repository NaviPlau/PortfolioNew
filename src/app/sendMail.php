<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): 
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"): 
            header("Access-Control-Allow-Origin: *");
            $json = file_get_contents('php://input');
            $params = json_decode($json);
            $email = $params->email;
            $name = $params->name;
            $message = $params->message;
            $recipient = 'contact@paul-ivan.com';  
            $subject = "Contact From <$email> from portfolio";
            $message = "From:" . $name . "<br>" . $message ;
            $headers   = array();
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';
            $headers[] = "From: $email, $name";

            mail($recipient, $subject, $message, implode("\r\n", $headers));
            break;
        default: 
            header("Allow: POST", true, 405);
            exit;
    } 