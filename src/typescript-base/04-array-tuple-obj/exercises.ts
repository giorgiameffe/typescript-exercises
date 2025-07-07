// ✏️ Esercizio 1: Crea un array di numeri
// Crea un array contenente i numeri da 1 a 5 e stampa ogni numero presente nell'array.

const numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number));

// ✏️ Esercizio 2: Funzione che filtra i numeri pari
// Crea una funzione che restituisca un array di numeri pari.

function evenNumber(numbers: number[]): number[] {

    return numbers.filter(number => number % 2 === 0);
}

console.log(evenNumber([1, 2, 3, 4, 5, 6]));

// ✏️ Esercizio 3: Calcola la somma totale
// Somma tutti i numeri dell’array [3, 7, 2, 13, 18].

{
    const numbers: number[] = [3, 7, 2, 13, 18];

    const sumNumbers = numbers.reduce((acc: number, currentValue: number) => {

        return acc + currentValue;

    })

    console.log(sumNumbers);
}

// Tuple

// ✏️ Esercizio 1: Crea una tupla semplice
// Crea una tupla con nome ed età e stampa solo il nome.

const person: [string, number] = ['Giorgia', 28];
console.log(`Nome: ${person[0]}`);

// ✏️ Esercizio 2: Tupla con 3 valori
// Crea una tupla che rappresenta un libro con titolo, autore, e anno.

// ✏️ Esercizio 3: Funzione che usa una tupla
// Scrivi una funzione che prende una tupla [nome, età] e stampa una frase.

// Oggetti

