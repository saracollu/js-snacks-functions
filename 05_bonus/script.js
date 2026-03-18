/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nameM = 'Mario';
let hello = ['Buongiorno','Buon pomeriggio','Buonasera']

let orario = prompt("Che ora è?" , "Mattina" , "Pomeriggio" , "Sera" )

// Dichiara la funzione qui.
function salutVar (nome) {
    for (let i = 0 ; i < hello.length ; i++) {
    if (orario === "Mattina") {
        console.log(hello[0] + " " + nome);
        
    } else if (orario === "Pomeriggio") {
        console.log(hello[1] + " " + nome);
        
    } else if (orario = "Sera") {
        console.log(hello[2] + " " + nome);
        
    }
    return hello
}
}
    

    

// Invoca la funzione qui e stampa il risultato in console

let result = salutVar(nameM)



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.