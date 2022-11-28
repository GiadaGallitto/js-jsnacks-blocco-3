// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a 
// quando la somma degli elementi è minore di 50.

const numberList = [];

let userNum;

let sum = 0;

while (sum <= 50){
    userNum = parseInt(prompt(`Inserisci un numero`));
    sum += userNum;
    // Alla somma devo sommare il valore inserito dall'utente
    // Per poi inserirlo nella lista vuota tramite un push
    numberList.push(userNum);
    
}

console.log(sum);