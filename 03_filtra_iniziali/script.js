/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];



// Dichiara la funzione qui.

function getNames (array , letter) {

   const initialsL = [];

    for (i = 0 ; i < array.length ; i++) {
        if (array[i][0] === letter) {
            initialsL.push(array[i])
        }
    }
    return initialsL
}


const initialsL = getNames(names , "L")

console.log(initialsL);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]