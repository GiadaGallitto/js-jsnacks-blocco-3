// Prendere due array della stessa lunghezza e generarne un terzo, prendendo alternativamente
// gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const numArr = ["A", "B", "C", "D", "E"];

const charsArr = [1, 2, 3, 4, 5];

// Creo due array con la stessa quantità di elementi
// E un array nuovo e vuoto dove inserire le combinazioni delle prime due

const newArr = [];

// Creo un ciclo for dove utilizzo una delle due liste come condizione, nel caso in cui le due liste,
// avessero avuto lunghezze diverse, dovrei inserire la lista più corta
for(let i = 0; i < charsArr.length; i++){
    // Infine creo un push per inserire alternativamente un elemento di ogni lista
    newArr.push (charsArr[i], numArr[i]);
}

console.log(newArr);