<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(
        !empty($_POST['nom'])
        && !empty($_POST['email'])
        && !empty($_POST['message'])
    ){
        $name = $_POST["nom"];
        $surname = $_POST["prenom"];
        $email = $_POST["tel"];
        $phone = $_POST["email"];
        $message = $_POST["message"];


        $to = "vvaugrente@gmail.com";
        $subject = "Nouveau contact via site web";
        $body = "Nom: {$name}\nPrenom: {$surname}\nEmail: {$email}\ntel: {$phone}\nMessage: {$message}";
        $headers = "From: {$email}";


        if (mail($to, $subject, $body, $headers)) {
            echo "Votre message a été envoyer avec succès";
        } else {
            echo "Erreur dans l'envoi du message";
        }
    }
}
?>
