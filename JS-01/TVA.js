//- 1 j'ai ça
const TVA = 20.0;
 
// -2 QQchose se passe
const prixHT = parseFloat(prompt('Quelle est le montant HT ?'));

// L'utilisateur saisit un montant HT
// Attention au type de la donnée renvoyé par window.prompt() !
// Le montant HT est un nombre à virgule (on peut saisir des centimes).

const montantTva = (prixHT * TVA) / 100;

const montantTTC = prixHT + montantTva;

// -3 J'affiche le resultat.

// Il faut réafficher toutes les informations : le montant HT, le montant de TVA et le résultat TTC.
document.write('Montant HT: ' + prixHT + ' Montant TTC:  ' + montantTTC + ' Taux TVA ' + TVA + '%' );







