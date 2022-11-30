// Crea una funzione che dato l'array calcola la somma dei suoi elementi


function getSumOfArrayElements(array){
    // Dichiaro la somma che parte da zero
    let sum = 0;
    
    // Prendo ogni elemento dell'array
    for (let i = 0; i < array.length ; i++){
        // Controllo se l'elemento è un numero raggiungibile
        const castedElement = parseInt(array[i], 10);

        // Aggiungere alla somma
        if( !Number.isNaN(castedElement)){
            sum = sum + castedElement;
        }
    }

    return sum;
}

const list = [`Gianni`, `Elisaberto`, 45, 56, 3, `Billy`, 130];

console.log(getSumOfArrayElements (list));
