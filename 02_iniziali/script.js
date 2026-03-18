/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.



function getInitials(names) {

const initials = [];

    for ( i = 0 ; i < names.length ; i++ ) {
        
        const everyName = names[i]
        const everyInitials = everyName[0]
        initials.push(everyInitials)
       
    }
  return initials
}

// Invoca la funzione qui e stampa il risultato in console

const allInitials = getInitials(names);
console.log(allInitials);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]