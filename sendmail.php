<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('kovalenko.olexandra@gmail.com', 'FADU');
	//Кому отправить
	$mail->addAddress('kovalenko.olexandra@gmail.com');
	//Тема письма
	$mail->Subject = 'Привіт! Це FADU';

	//Вибір
	$choose = "Бажаю допомогти";
	if($_POST['choose'] == "need"){
		$choose = "Потребую допомоги";
	}

	//Тело письма
	$body = '<h1>На сайті FADU нова заявка</h1>';
	
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Ім&rsquo;я:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['choose']))){
		$body.='<p><strong>Я:</strong> '.$choose.'</p>';
	}
	if(trim(!empty($_POST['tel']))){
		$body.='<p><strong>Номер телефона:</strong> '.$_POST['tel'].'</p>';
	}
	
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
	}
	
	//Прикрепить файл
	if (!empty($_FILES['image']['tmp_name'])) {
		//путь загрузки файла
		$filePath = __DIR__ . "/files/" . $_FILES['image']['name']; 
		//грузим файл
		if (copy($_FILES['image']['tmp_name'], $filePath)){
			$fileAttach = $filePath;
			$body.='<p><strong>Фото в приложении</strong>';
			$mail->addAttachment($fileAttach);
		}
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Помилка';
	} else {
		$message = 'Данні відправлено!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>