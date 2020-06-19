let number = '';

do {
    number = parseFloat(prompt('entrez un nombre'));
} while (isNaN(number));



document.write('<table>');

for(let i = 1; i <= number; i++) {
    document.write('<tr>');
    
    for(let j = 1; j <= number; j++) {
        
        // Si le nombre se multiplie par lui meme //      on genere un type de td avec une classe CSS
        if(i === j) {
            document.write('<td class="couleur-differente">');
            document.write(i * j);
            document.write('</td>');    
        } else {
            // Sinon
            //      on genere un td normal pas de classe
            document.write('<td>');
            document.write(i * j);
            document.write('</td>');    
        }
        
        
        
        
    }
    
    
    document.write('</tr>');
}


document.write('</table>');