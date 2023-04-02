# Ajouter des routes au backend
- Se rendre dans le fichier back/routes/routes.js
- Copier coller cet extrait :
```js
    server.get('/categories', function (req, res, next) {
        dbRequests.getCategories(function (error, categories) {
            if (error) {
                return res.json(500, {error: "Unexpected error, maybe our services are down."});
            } else {
                return res.json(200, categories);
            }
        });
    });
```
- Modifier le '/categories' par la route souhaitée.
- Modifier le dbRequests.getCategories par dbRequests.LeNomDeLafFonctionQuiFaitLaappelSQL

- Dans le fichier dbRequests.js
- Copier coller juste en dessous :
```js
exports.getCategories = function(callback) {
  connectToDb.query("select * from category", function(error, results) {
        if(error){    
            console.log("Error ocurred in executing the query : " + error);
        } else {
            for(let result of results) {
              console.log(result);
            }
        }
        callback(error, results);
    });
}
```
- Modifier la requête sql pour récupérer le bon élément.  
Exemple : "select * from category".