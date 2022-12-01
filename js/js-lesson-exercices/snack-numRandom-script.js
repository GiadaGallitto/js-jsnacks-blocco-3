/**
 *
 * Data una lista di 20 numeri diversi.
 * generiamo una lista secondaria di
 * 10 numeri presi dalla lista, diversi tra loro.
 *
 */

const startingList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const endingList = [];

// Finchè la nuova lista non ha 10 elementi
while(endingList.length < 10){
    
    // Genera un numero randomico che vada da zero fino alla lunghezza della lista starting (con l'uso della funzione apposita)
    const randomNumber = getRandomNumber(0, startingList.length - 1);
    
    // Se l'elemento randomico della startingList non è già incluso nella endingList
    if(!endingList.includes(startingList[randomNumber])){
        // Allora lo aggiungo nella nuova lista
        endingList.push(startingList[randomNumber])
    }   // Altrimenti vado avanti con la ricerca

}

console.log(endingList)

function getRandomNumber(numMin, numMax){
    if (numMin === numMax){
        return numMax
    }

    return Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
}