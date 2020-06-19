



// i == itérateur
for(let i = 0; i  < 10; i++) {
    //console.log(i);
}

for(let i = 0; i  <= 10; i++) {
    //console.log(i);
}

const choix = ['feuille', 'pierre', 'ciseaux', 'test', '26', 'test encore'];

let max = '';

for(let i = 0; i < choix.length; i++) {
    //console.log(choix[i]);
    console.log(i);
    // choix[6] === undefined
    
    // afficher le mot le plus long
    
    // je dois comparer les valeurs du tableau entre elle
    
    // si la valeur actuelle est plus grande que la valeur d'avant
    
    if(choix[i].length > max.length) {
        max = choix[i];
    }
    console.log(choix[i]);
    // alors la valeur actuelle est la plus grande.
    // max = choix[i];
      if(choix[i].length > max.length) {
        max = choix[i];
    }
    
}

