//let randomNumber = Math.random(4);
//Math.floor(10.9);
let string = 'un test de string';

string.charAt(10);
string.length;
string.split();
string.substr(2, 5);

string.toLowerCase(); // convertit tout en minuscule
string.toUpperCase(); // convertit tout en majuscule


function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.substr(1);
}

console.log(ucFirst(un test de string));// en PHP la fonction ucFirst existe