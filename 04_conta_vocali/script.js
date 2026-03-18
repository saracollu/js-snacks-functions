/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function onlyVocals (array){

    
    
    const letters = array.split(''); 
    const vocals = ['a' , 'e' , 'i' , 'o' , 'u']; //per confrontare
    console.log(vocals);
    
    console.log(letters);

    const howManyVocals = [] //dove inserire le vocali di word

    for (let i = 0 ; i < array.length ; i++) {
        
        console.log('ciao');
       
        
        if (vocals.includes(letters[i])){

           howManyVocals.push(letters[i])
           
           
        }
    
    }

    return howManyVocals
}

// Invoca la funzione qui e stampa il risultato in console

const howManyVocals = onlyVocals(word)
console.log(howManyVocals.length);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)