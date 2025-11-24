<?php

if(isset($_POST['submit'])) {
    $returnURL = $_POST['returnURL'];
    
    $name = $_POST['name'];

    $subject = $_POST['subject'];

    $mailFrom = $_POST['mail'];

    $message = $_POST['message'];

    $mailTo = "auv@itu.edu.tr";
    $headers = "From: ". $mailFrom;
    $txt = "You have received an e-mail sent by ".$name." from AUV Website".".\n\n".$message;


    mail($mailTo, $subject, $txt,$headers);
    header("Location: ".$returnURL."?processSuccess");

}else{
    echo 'Error sending message please go back';
}





?>