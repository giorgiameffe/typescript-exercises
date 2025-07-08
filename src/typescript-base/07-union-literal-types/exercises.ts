// ✏️ Esercizio 1: Union type con parametri
// Crea una funzione che accetta un parametro che può essere stringa o numero e lo stampa.

function printValue(value: string | number): void {

    console.log(value);
}

printValue(8);
printValue('Luglio');

// ✏️ Esercizio 2: Literal type semplice
// Definisci una variabile status che può essere solo "online" o "offline".

{
    let status: 'online' | 'offline';

    status = 'online'
    console.log(status);

    status = 'offline';
    console.log(status);
}


// ✏️ Esercizio 3: Funzione con literal type
// Scrivi una funzione che accetta solo "ok" o "errore" e stampa un messaggio diverso in base al valore.

function reportStatus(status: 'ok' | 'errore'): void {

    if (status === 'ok') {
        console.log('Ok!');
    } else {
        console.log('Errore!')
    }
}

reportStatus('ok');
reportStatus('errore');

// ✏️ Esercizio 4: Uso di type con Union e Literal Types
// 1. Definisci un type chiamato RuoloUtente, che può essere solo uno di questi valori letterali:
// "admin", "user", "guest".
// 2. Crea un type chiamato Utente, con le seguenti proprietà:
// nome: string, ruolo: RuoloUtente
// 3. Scrivi una funzione verificaAccesso che accetta un oggetto di tipo Utente
// e stampa un messaggio diverso a seconda del ruolo.




// ✏️ Esercizio 5: Funzione con union numerico e stringa
// Crea una funzione calcolaSconto che accetta o:
// un numero (percentuale)
// o la stringa "nessuno"
// Se è un numero, calcola lo sconto su un prezzo. Se "nessuno", torna il prezzo intero.