// ✏️ Esercizio 1 – Any
// Dichiara una variabile value di tipo any e assegnale un numero, poi una stringa, poi un boolean.

let value: any = 30;
console.log(value);

value = 'Matita';
console.log(value);

value = true;
console.log(value);

// ✏️ Esercizio 2 – Any
// Dichiara una variabile data di tipo any. Assegnale un numero, poi una stringa, poi un array.

let data: any;

data = 3;
console.log(data);

data = 'Estate';
console.log(data);

data = [4, 8, 13, 5];
console.log(data);

// ✏️ Esercizio 3 – Unknown
// Dichiara una variabile data di tipo any. Stampalo in maiuscolo solo se è una stringa.

{
    const data: unknown = 'Giochi da tavolo';

    if (typeof data === 'string') {
        console.log(data.toUpperCase());
    } else {
        console.log('Non sono una stringa');
    }
}

// ✏️ Esercizio 4: Unknow ed Errori
// Mostra l’errore con unknown senza controllo e poi procedi con la correzione.

const dato: unknown = 50.56356;
// console.log(dato.toFixed());

if (typeof dato === 'number') {
    console.log(dato.toFixed(2))
}

// ✏️ Esercizio 5: Void 
// Crea una funzione saluta che accetta un nome e stampa "Ciao, <nome>", senza restituire nulla.

function sayHello(name: string): void {

    console.log(`Ciao, ${name}`);
}

sayHello('Giorgia');

// ✏️ Esercizio 6: Void 
// Scrivi una funzione showAlert che mostra un alert("Attenzione!"). 
// Specifica che il tipo di ritorno è void.

// function showAlert(): void {

//     alert('Attenzione!');
// }

// showAlert();

// ✏️ Esercizio 6: Never
// Crea una funzione errorMsg che prende una stringa e lancia sempre un Error. Usa il tipo di ritorno never.

function errorMsg(msg: string): never {

    throw new Error(msg);
}

errorMsg('Errore!');



