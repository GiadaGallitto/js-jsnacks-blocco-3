// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const shortList = [1, 2, 3, 4, 5, 6];

const longList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let randomElement;

while(shortList.length != longList.length){
    randomElement = Math.floor(Math.random() * longList.length);
    console.log(randomElement);
    
    if(shortList.length < longList.length){
        shortList.push(randomElement);
    } else if(shortList.length > longList.length){
        longList.push(randomElement);
    }
}

console.log(randomElement);
console.log(shortList, longList);