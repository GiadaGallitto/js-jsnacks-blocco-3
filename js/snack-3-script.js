// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const shortList = [1, 2, 3, 4, 5, 6]

const longList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let randomElement = 1;

while(shortList.length < longList.length){
    shortList.push(randomElement)
}

console.log(shortList, longList);