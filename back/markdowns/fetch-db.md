# Comment récupérer la base de donnée sur un autre pc ?

## 1. Installer MySQL
- Installer MySql, choisir le premier lien :  
https://dev.mysql.com/downloads/installer/
- Appuyer sur la touche "windows" -> taper "cmd"
- Taper "mysql -u root -p" puis valider la touche entrée.
- En principe, le terminal devrait indiquer :
![bd config](./img/03.JPG "config bdd 1")
- Si jamais un mot de passe est demandé, bien le retenir.  
  Ce dernier sera utile plus tard.
- Une fois cette étape affichée dans le terminal, ajouter :
```sql
CREATE DATABASE kwidzy;
```
puis valider avec la touche entrée.


## 2. Installer Dbeaver
- Télécharger dbeaver 
-> https://dbeaver.io/download/
- Sur dbeaver, cliquer sur MySql
- Si jamais il demande de télécharger un driver, dire oui.
![bd config](./img/02.png "config bdd 1")
- Puis mettre les configs suivantes (kwidzy à la place de test)
![bd config](./img/01.png "config bdd 2")
- Si tout va bien jusqu'ici GG !
- Faire un nouveau script :
![bd config](./img/04.png "config bdd 3")
- Dans la section script, copier coller les données créées ci-joint dans la partie.
- Executer avec le 3eme bouton à gauche :
![bd config](./img/05.png "config bdd 4")