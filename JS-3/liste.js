
let listeDeCourses = ['sopalin', 'oranges', 'citrons', 'savon', 'eau de javel', 'du virus en promo'];

// Ajouter un produit par son nom
function ajouterUnProduitALaListe(produit) {
    listeDeCourses.push(produit);
}

ajouterUnProduitALaListe('pommes');

function supprimerTousLesProduitsDeLaListe() {
    listeDeCourses.length = 0;    
}

/// Afficher la taille
function afficheTailleListe() {
    return listeDeCourses.length;    
}



// Afficher le contenu de la liste <ul>
function afficherLaListeDesProduits() {
    document.write('<ul>');

    //Creer les li
    for(let produit of listeDeCourses) {
        document.write(`<li>${produit}</li>`);
    }
    
    document.write('</ul>');
}

document.write(`La Liste contient ${afficheTailleListe()} elements.`);

afficherLaListeDesProduits();



//Le code ne doit pas se répéter, il faut donc organiser le programme en fonctions.







//Les tableaux sont des objets de la classe Array, s'appuyer sur des méthodes de cette classe pour implémenter les fonctionnalités

//Pour vérifier le bon fonctionnement du programme il faut écrire du code de test, par exemple :
//         Ajouter 4 produits simples puis afficher les informations
//         Demander à l'utilisateur de saisir le nom d'un produit, essayer de supprimer celui-ci puis afficher les informations
//         Supprimer tous les produits puis afficher les informations

