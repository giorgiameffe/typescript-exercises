// ✏️ Esercizio 1 – Variabile stringa

// Dichiara una variabile name e assegnale una stringa con il tuo nome.

const myName: string = 'Giorgia';
console.log(myName);

// ✏️ Esercizio 2 – Variabile numerica

// Dichiara una variabile age e assegnale un numero intero.

const age: number = 28;
console.log(age);

// ✏️ Esercizio 3 – Costante

// Crea una costante PI con valore 3.14.

const PI: number = 3.14;
console.log(PI);

// ✏️ Esercizio 4 – Variabile booleana

// Dichiara una variabile isOnline e assegnale il valore true.

const isOnline: boolean = true;
console.log(isOnline);

// ✏️ Esercizio 5 – Tipizzazione implicita

// Dichiara una variabile favouriteColour senza specificare il tipo, ma assegnale un valore stringa.

const favouriteColour = 'lilac';
console.log(favouriteColour);

// ✏️ Esercizio 6 – Riassegnazione

// Crea una variabile score con valore 0, poi aggiornala a 100.

let score: number = 0;
console.log(score);

score = 100;
console.log(score);

// ✏️ Esercizio 7 – Somma di due numeri

// Dichiara due variabili a e b, sommale e stampa il risultato.

const a: number = 3;
const b: number = 8;
const sum: number = a + b;
console.log('Somma:', sum);

// ✏️ Esercizio 8 – String template

// Crea una variabile userName, una userAge, e stampa "Ciao Marco, hai 28 anni." usando template string.

const userName: string = 'Marco';
const userAge: number = 28;
console.log(`Ciao ${userName}, hai ${userAge} anni.`);

// ✏️ Esercizio 9 – Errore di tipo

// Dichiara una variabile level come number e prova ad assegnarle una stringa.

// const level: number = 'Girasole'; [Esercizio commentato per errore in console]

// ✏️ Esercizio 10 – Variabili multiple

// Dichiara tre variabili in una sola riga: x = 5, y = 10, z = 15, e stampale.

const x: number = 5, y: number = 10, z: number = 15;
console.log('x:', x, 'y:', y, 'z:', z);