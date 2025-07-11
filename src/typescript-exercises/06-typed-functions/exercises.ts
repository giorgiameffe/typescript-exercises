// ✏️ Esercizio 1: Somma
// Scrivi una funzione che accetta due numeri e restituisce la loro somma.

{
    function sum(num1: number, num2: number): number {

        return num1 + num2;
    }

    console.log(sum(7, 9));
}

// ✏️ Esercizio 2: Crea saluto
// Scrivi una funzione che prende un nome (stringa) e ritorna una frase tipo: "Ciao, Mario!".

function sayHi(name: string): string {

    return `Ciao, ${name}!`;
}

console.log(sayHi('Linda'));

// ✏️ Esercizio 3: Controlla maggiore età
// Scrivi una funzione che prende un'età (numero) e restituisce true se è maggiore o uguale a 18, altrimenti false.

function isAdult(age: number): boolean {

    return age >= 18;
}

console.log(isAdult(10));
console.log(isAdult(23));

// ✏️ Esercizio 4: Array di nomi
// Scrivi una funzione che accetta un array di stringhe e stampa ogni nome.

function printNames(names: string[]): void {

    names.forEach(name => console.log(name));
}

printNames(['Maria', 'Azzurra', 'Enea']);

// ✏️ Esercizio 5: Funzione con oggetto
// Scrivi una funzione che prende un oggetto { name: string; age: number } e ritorna una stringa descrittiva.

{
    function describePerson(person: { name: string, age: number }): string {

        return `Ciao, sono ${person.name} e ho ${person.age} anni.`
    }

    console.log(describePerson({ name: 'Giulio', age: 34 }));
}

{
    // Con Interface

    interface Person {
        name: string,
        age: number
    }

    function describePerson(person: Person): string {

        return `Ciao, sono ${person.name} e ho ${person.age} anni.`
    }

    console.log(describePerson({ name: 'Tommaso', age: 22 }));
}