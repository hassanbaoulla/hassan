// isNaN = is Not a Number;
console.log(isNaN(20));
console.log(isNaN('vingt'));


const TVA = 20.0;

let prixHT = '';


do {
    // fais ca
    
    prixHT = parseFloat(prompt('Entrer un prix HT'));
    
    // tant que la on est pas content
} while(isNaN(prixHT));


if(isNaN(prixHT)) {
    console.error('erreur');
} else {
    const reduction = prompt('Beneficiez vous d\'une remise ?').toLowerCase();

    if(reduction === 'oui'  || reduction === 'yes') {
        
        let remise = '';

        do {
           remise = parseFloat(prompt('Entrer le pourcentage de remise')); 
        } while(isNaN(remise));
        
      const montantRemise = (prixHT * remise) / 100;
      prixHT = prixHT - montantRemise;
      document.write('remise de ' + montantRemise + '&euro;');
    }

    const montantTVA = (prixHT * TVA) / 100;
    const prixTTC = (prixHT + montantTVA);

    document.write('prix TTC: ' + prixTTC);
}

