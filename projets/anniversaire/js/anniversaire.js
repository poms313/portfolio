// Déclaration des variables les plus utilisées
var $un = $('#un'),
	$deux = $('#deux'),
	$trois = $('#trois'),
	$versionFinale = $('#fin');



// Création des 2 premiers paragraphes
$un.on("click", (function () {
	$deux.fadeIn(800);
}));

$deux.on("click", (function () {
	$trois.fadeIn(800);
}));

// Le troisième modifie la page
$trois.on("click", (function () {

	//Disparition des éléments présents
	$('#paragraphes').slideUp();
	$('#titre').slideUp();

	

	//Modification de l'arriére plan
	$('body').css("backgroundImage", "url(images/cadeau.jpg)");
	$('body').css("backgroundSize", "10%");

	//Ajout de l'image	
	var $cadeau = new Image();
	$cadeau.src = "images/voiture.png";
	$cadeau.alt = "Voici ton cadeau"
	$cadeau.width = 900;


	// Du texte
	$versionFinale.append("<h2 class=\"clignoter titre\">Voici ton cadeau</h2>");
	$versionFinale.append($cadeau);
	$versionFinale.append("<h2 class=\"clignoter titre\">C'est ton jour de chance!</h2>");

	// Et d'animations
	$versionFinale.slideDown(2000, function () {
		function FaireClignoter() {
			$('.clignoter').fadeIn(800).delay(1000).fadeOut(800);
		}
		var intervalId = setInterval(FaireClignoter, 700);
	});

}))
