/*
JS1.2 - Chifoumi
Énoncé
, et la partie commence !

Détails
Le mot peut tout aussi bien être saisi en minuscules qu'en majuscules.
Rappels
Si le joueur et l'ordinateur font le même choix on obtient une égalité.
Le ciseau est écrasé par la pierre (la pierre gagne, le ciseau perd).
La feuille est découpée par le ciseau (le ciseau gagne, la feuille perd).
La pierre est enveloppée par la feuille (la feuille gagne, la pierre 

*/
//https://devdocs.io/javascript/global_objects/math/random

// recuperer le choix de l'utilisateur.
// L'utilisateur saisit le mot pierre , feuille ou ciseau
let choixUtilisateur = prompt('choisissez pierre, ciseaux ou feuille.');

// recuperer le choix de l'ordinateur.
// l'ordinateur choisit aléatoirement l'une des trois possibilités
let choixOrdinateur = ['feuille', 'ciseaux', 'pierre'];
const index = Math.floor(Math.random() * 3);

console.log(choixOrdinateur[index]);






if( choixUtilisateur === choixOrdinateur[index] ) {
    console.log('égalité');
    
} else {
    
    if (choixUtilisateur == "pierre" && choixOrdinateur[index] == "ciseaux") {
        console.log('utilisateur: la pierre gagne');
    } else if(choixUtilisateur == "pierre" && choixOrdinateur[index] == "feuile") {
        console.log('ordinateur: la feuille gagne');
    } else if(choixUtilisateur == "ciseau " && choixOrdinateur[index] == "feuile") {
}       console.log('utilisateur:le ciseau gagne');





