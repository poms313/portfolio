<?php
function cleanData($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$errors = array();

if (!empty($_POST)) {
    checkData($_POST);
} else {
    $errors[] = "votre formulaire est vide";
}

function checkdata($dataSendByUser)
{
    print_r($dataSendByUser);
    print_r($_POST);
    $humans = cleanData(($dataSendByUser['contact']['miel']));
    if (!empty($humans)) {
        $errors[] = "Anti Spam activé";
        $return = false;
    } else $return = true;

    $email = cleanData($dataSendByUser['contact']["email"]);
    if (!empty($email) && $return = true) {
        if (!$email == filter_var($email, FILTER_VALIDATE_EMAIL) && !filter_var($email, FILTER_SANITIZE_EMAIL)) {
            $errors[] = "($email) votre adresse email n'est pas valide, elle doit être au format: monnom@mondomaine.extension";
            $return = false;
        } else {
            $return = true;
            $verifiedValues["email"] = $email;
        }
    }

    $verifiedValues["name"] = cleanData($dataSendByUser['contact']["name"]);
    $verifiedValues["message"] = cleanData($dataSendByUser['contact']["message"]);

    if ($return == true && empty($errors)) {
        sendMail($verifiedValues);
    } else {
        array_unshift($errors, "<p>Erreur rencontrée lors de la validation des données transmises par le formulaire.</p><p> Voici les erreurs rencontrées:</p>");
        showResultToUser($errors);
    }
}

function sendMail($dataToSend)
{
    $headers =
        "From: " . $dataToSend["email"] . "\r\n" .
        "MIME-Version: 1.0\r\n" .
        "Content-Transfer-Encoding: quoted-printable\r\n" .
        "Content-type: text/html; charset=iso-8859-1" . "\r\n";

    $message = "<!DOCTYPE html><html lang='fr'><html><head><meta charset='UTF-8'>";
    $message .= "<p>Message envoye depuis la page de contact de mon site: </p> <p>Envoye par: </p>";
    $message .= "<p>Nom: " . $dataToSend["name"] . "</p>";
    $message .= "<p>Email: " . $dataToSend["email"] . "</p>";
    $message .= "<p>Message: " . $dataToSend["message"] . "</p>";
    $message .= '</body></html>';

    $sendMail = mail("pommine@free.fr", "Envoi depuis la page Contact", $message, $headers);
    if ($sendMail) {
        $return = "<h2>Félicitations</h2><p>Merci pour votre demande de contact, je reviens vers vous le plus rapidement possible!</p>";
        showResultToUser($return);
    } else {
        $return = array();
        array_unshift($return, "<p>Malheureusement, il y a des erreurs lors de l'envoi du formulaire.</p>");
        $return[] = "<p>Merci de réessayer ultérieurement</p>";
        showResultToUser($return);
    }
}

function showResultToUser($messageResult)
{

    if (is_array($messageResult)) {
        $errorsResult = implode("<p>", $messageResult);
        $bootstrapClass = "alert-danger";
    } else $bootstrapClass = "alert-success";
    $html = "<!DOCTYPE html><html lang='fr'><head>";
    $html .= "<meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1'>";
    $html .= "<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh' crossorigin='anonymous'>";
    $html .= "</head><body>";
    $html .= "<div class='container' style='display: flex; align-items: center; text-align: center; height: 100%;'>";
    $html .= "<div class='m-4 p-5 rounded' style='background-color: #f2f2f2; width: 100%;'>";
    if (isset($errorsResult)) {
        $html .= "<h1>Message non envoyé:</h1>";
    } else  $html .= "<h1>Message envoyé</h1>";
    $html .= "<div class='alert " . $bootstrapClass  . "'>";
    if (isset($errorsResult)) {
        $html .= $errorsResult;
    } else  $html .= $messageResult;
    $html .= "</div>";
    $html .= "<p>Redirection automatique vers la page d'accueil dans <span id='counter'>2000</span> secondes</p>";
    $html .= "<button type='button' id='redirect' onclick=window.location.href='https://pommine-fillatre.com' class='btn btn-secondary'>Retour à l'accueil</button>";
    $html .= "</div></div>";
    $html .= "</div>";
    $html .= "<script>var counterElt = document.getElementById('counter');
    function decreaseCounter() {
        var counter = Number(counterElt.textContent);
        if (counter > 1) {
            counterElt.textContent = counter - 1;
        } else {
            clearInterval(intervalId);
            var titre = document.getElementById('redirect');
            titre.click();   
        }
    }
    var intervalId = setInterval(decreaseCounter, 1000);</script>";
    $html .= "</body></html>";
    echo $html;
}
