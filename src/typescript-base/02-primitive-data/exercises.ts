// ✏️ Esercizio 1 – Variabile stringa
// Crea una variabile fruit di tipo string

const fruit: string = 'Cocomero';
console.log(fruit);

// ✏️ Esercizio 2 – Variabili numeriche
// Crea due numeri e stampane la somma

{

    const num1: number = 23;
    const num2: number = 11;
    const sum: number = num1 + num2;
    console.log(sum);

}

// ✏️ Esercizio 3 – Conditional
// Usa un booleano in una condizione if

const isLogged: boolean = true;

if (isLogged) {
    console.log("L'utente ha effettuato l'accesso!")
}

// ✏️ Esercizio 4 – Variabile null
// Assegna null a una variabile e stampala

const nullData: null = null;
console.log(nullData);

// ✏️ Esercizio 5 – Variabile undefined
// Assegna undefined a una variabile e verifica typeof

const undefinedData: undefined = undefined;
console.log(typeof undefinedData);

// ✏️ Esercizio 6 – Concatenazione stringhe
// Concatena due stringhe con template literals

const firstName: string = 'Giorgia';
const lastName: string = 'Meffe';
const fullName: string = `${firstName} ${lastName}`;
console.log(fullName);

// ✏️ Esercizio 7 – Funzione numerica
// Scrivi una funzione che prende due numeri e restituisce la somma

function sumTwoNumbers(num1: number, num2: number): number {

    return num1 + num2
}

console.log(sumTwoNumbers(3, 5));

// ✏️ Esercizio 8 – Typeof
// Usa typeof su ogni tipo primitivo

{
    const name = 'Ginevra';
    const age = 8;
    const isAdult = false;
    const favouriteFood = undefined;
    const weight = null;

    console.log(typeof name, typeof age, typeof isAdult, typeof favouriteFood, typeof weight);
}

// ✏️ Esercizio 9 – Variabile Booleana
// Tipizza una variabile booleana con const isActive: boolean = true

const isActive: boolean = true;
console.log(isActive);

// ✏️ Esercizio 10 – Typeof su valori Null e Undefined
// Verifica typeof su valori null e undefined

{
    const x = null;
    const y = undefined;

    console.log(typeof x, typeof y);
}

// ✏️ Esercizio 11: Creazione e somma di BigInt
// Crea due variabili bigint chiamate prezzoA e prezzoB, con valori molto grandi.
// Calcola la somma, la differenza e il prodotto dei due prezzi.

{
    const priceA: bigint = 1234567890n;
    const priceB: bigint = 4567890n;

    const sum: bigint = priceA + priceB;
    console.log('Somma:', sum);

    const subtraction: bigint = priceA - priceB;
    console.log('Sottrazione:', subtraction);

    const multiplication: bigint = priceA * priceB;
    console.log('Moltiplicazione:', multiplication);
}

// ✏️ Esercizio 12: Somma di number e bigint (risolvi l'errore)
// Prova a sommare una variabile number a un bigint (deve dare errore) e poi risolvi convertendo il numero.

const number: number = 456789;
const bigint: bigint = 34567890n;

// const sumNumberBigInt: bigint = number + bigintNumber;
// console.log(sumNumberBigInt);

const bigintNumber: bigint = BigInt(number);
const sumBigInts: bigint = bigint + bigintNumber;
console.log(sumBigInts);

// ✏️  Esercizio 13: Symbol()
// Usa il tipo Symbol in una variabile e stampa il risultato.

const userId: symbol = Symbol('id_utente');
console.log(userId);

// ✏️  Esercizio 14: Symbol()
// Crea due simboli Symbol("id") e verifica se sono uguali.

const firstSymbol: symbol = Symbol('id');
const secondSymbol: symbol = Symbol('id');

const comparisonSymbols: boolean = firstSymbol === secondSymbol;
console.log(comparisonSymbols);

