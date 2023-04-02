### main.js
Point d'entrée du backend, c'est ce fichier qu'il faut lancer en premier lorsque le back démarre.  
Il fait l'initialisation de la connection à la base MySql (en faisant un require sur les routes, et les routes font un require sur le fichier qui fait des requêtes sur la base, et ce fichier fait l'initialisation de la connection lui même).
Il fait l'initialisation des routes avec le require sur routes.js.  
Il lance le server avec ser.listen sur le port 3030.  
Restify : Librairie qui permet de faire un serveur REST. Ressemble à Express.

### routes.js
Définit les routes de l'api REST,  
"/" pour le moment, mais il est possible d'en ajouter d'autres.