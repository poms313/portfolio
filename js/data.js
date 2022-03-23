document.addEventListener("DOMContentLoaded", function () {





    const todolist = `<div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title"></h4>
            <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
            <h6></h6>
            <p></p>
            <p>Création et maintenance d'une base de donnée MySQL</p>
            <p>Affichage d'un calendrier au format français personnalisé</p>
            <p></p>
            <p></p>
            <p>Sécurisation des mots de passe par crytage</p>
            <p>Site responsive: adapté aux mobiles, tables et ordinateurs</p>
            <p>Assurer la conformité de votre application avec les langages PHP, Javascript,
                HTML5 et CSS</p>
            <p>Intégrer les contenus et les effets graphiques(animations)</p>
            <p> images</p>
            <a href="" rel="noopener noreferrer nofollow"
                target="_blank">
                <strong>Voir le code</strong>
            </a>
        </div>
    </div>
    </div>`;
    document.getElementById("todolist").innerHTML = todolist;

    const anniversaire = `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <h4 class="modal-title">Carte d'anniversaire animée avec Jquery</h4>
          <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
          <h6>Utilisation d'un framework Javascript</h6>
          <p>Découverte de Javascript et de sa logique</p>
          <p>Interactive en utilisant la gestion d'évenements Jquery</p>
          <p>Site responsive: adapté aux mobiles, tables et ordinateurs</p>
          <p>Modifier le contenu d'une page en fonctions des actions des utilisateurs</p>
          <a href="projets/anniversaire/anniversaire.html" rel="noopener noreferrer nofollow"
              target="_blank">
              <strong>Voir le site</strong>
          </a>
          <a href="https://github.com/poms313/anniversaire" rel="noopener noreferrer nofollow"
              target="_blank">
              <strong>Voir le code</strong>
          </a>
      </div>
    </div>
    </div>`;
    document.getElementById("anniversaire").innerHTML = anniversaire;

    const architecture = `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <h4 class="modal-title">Création d'un site avec Bootstrap</h4>
          <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
          <h6>Utilisation d'un framework CSS</h6>
          <p>Site responsive: adapté aux mobiles, tables et ordinateurs</p>
          <p>Obtenir le résultat souhait avec un code simple, facile à modifier.</p>
          <p>Mise en page complexe</p>
          <p>Création d'un slider automatique et manuel</p>
          <p>Hero image</p>
          <a href="projets/architecture/index.html" rel="noopener noreferrer nofollow"
              target="_blank">
              <strong>Voir le site</strong>
          </a>
      </div>
    </div>
    </div>`;
    document.getElementById("architecture").innerHTML = architecture;

    const atlantida = `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <h4 class="modal-title">Création d'un site à partir d'une maquette au format PSD
          </h4>
          <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
          <h6>Obtenir le visuel le plus proche posssible de la maquette</h6>
          <p>Utilisation des différentes couches de la maquette utilisables</p>
          <p>Utilisation de Bootstrap pour la mise en page</p>
          <p>Utilisation de Photoshop</p>
          <a href="projets/atlantida/openclassrooms.html" rel="noopener noreferrer nofollow"
              target="_blank">
              <strong>Voir le site</strong>
          </a>
      </div>
    </div>
    </div>`;
    document.getElementById("atlantida").innerHTML = atlantida;

    const movies = `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <h4 class="modal-title">Création d'une application mobile</h4>
          <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
          <h6>utilisation de React Native</h6>
          <p>Stockage des données utilisateurs</p>
          <p>Utilisation des composants du téléphone</p>
          <p>Utilisation d'une API pour obtenir la liste des films</p>
          <a href="https://github.com/poms313/MoviesAndMe" rel="noopener noreferrer nofollow"
              target="_blank">
              <strong>Voir le code</strong>
          </a>
      </div>
    </div>
    </div>`;
    document.getElementById("movies").innerHTML = movies;

    const teamGameBack = `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <h4 class="modal-title">Création d'une API en utilisant Symfony</h4>
          <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
          <h6>Cette api gère la partie back-end du jeu Team Game</h6>
          <p>Enregistrement et gestion de la base de données</p>
          <p>Encodage et décodage au format JSON</p>
          <p>Pour utiliser l'api: http://team-game.pommine-fillatre.com +</p>
          <ul>
              <li>list all players: /list/all/players</li>
              <li>get one player: /get/player/{id}</li>
              <li>modify player: /modify/player/{formData}</li>
              <li>create game: /game/create</li>
              <li>game result: /game/result/{formData}</li>
          </ul>
          <a href="https://github.com/poms313/TeamGameBackEnd"
              rel="noopener noreferrer nofollow" target="_blank">
              <strong>Voir le code</strong>
          </a>
      </div>
    </div>
  </div>`;
    document.getElementById("teamGameBack").innerHTML = teamGameBack;

    const teamGameFront = `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <h4 class="modal-title">Création d'un mini-jeu en utilisant Angular</h4>
          <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
          <h6>Mini-jeu en utilisant Angular</h6>
          <p>Création et modifications de nouveau joueurs</p>
          <p>Connexion avec l'API TeamGmeBackEnd</p>
          <a href="https://github.com/poms313/TeamGameFrontEnd"
              rel="noopener noreferrer nofollow" target="_blank">
              <strong>Voir le code</strong>
          </a>
      </div>
    </div>
    </div>`;
    document.getElementById("teamGameFront").innerHTML = teamGameFront;










});
