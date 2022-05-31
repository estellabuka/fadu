<?php
$fio = $_POST['fio'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$tel = htmlspecialchars($tel);
$fio = urldecode($fio);
$email = urldecode($email);
$tel = urldecode($tel);
$fio = trim($fio);
$email = trim($email);
$tel = trim($tel);
//echo $fio;
//echo "<br>";
//echo $email;
//echo "<br>";
//echo $tel;
if (mail("kovalenko.olexandra@gmail.com", "Заявка с сайта FADU", "ФИО:".$fio.". Телефон:".$tel.". E-mail: ".$email ,"From: kovalenko.olexandra@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>