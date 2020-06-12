const TVA = 20.0;

const prixHT = parseInt(prompt('Entrez votre prix HT SVP'));

// Gerer les minuscule et les majuscules: rechercher tolowercase, touppercase.
const reduction = prompt('beneficiez vous d\'une  remise').toLowerCase();
//+reduction.toLowerCase();

// str.toLowerCase();

if (reduction === "oui" || reduction === "yes") {
    // Demander le pourcentage de la remise.
    const pourcentageRemise = parseInt(prompt('Entrez le pourcentage de la remise'));
    
    // calculer une remise sur le prixHT.
    const montantRemise = (prixHT * pourcentageRemise) / 100;
    // calcul du prix HT avec remise.
    prixHT = prixHT - montantRemise;
    // Afiicher qu'on benificie d'une remise.
    document.write('<p>Vous beneficiez  d\'une remise de:' + montantRemise + '&euro;</p>');
}

// Calcul du prix TTC

const montantTVA = (prixHT * TVA) / 100;

const prixTTC = (prixHT + montantTVA);
document.write('prixTTC' + prixTTC);
do { 
    
    const number = parseFloat(prompt(entre un number));
}while (isNaN(number));