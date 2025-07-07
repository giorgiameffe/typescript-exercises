// ✏️ Esercizio 1: type base
// Crea un type chiamato Product con queste proprietà: name e price
// Crea una variabile di tipo Product e stampala.

type Product = {
    name: string,
    price: number
}

const tablet: Product = { name: 'Tablet', price: 100 };
console.log(tablet);

// ✏️ Esercizio 2: interface base
// Crea un’interface chiamata Person con: name e age
// Crea una variabile e stampala con una frase.

interface Person {
    name: string,
    age: number
}

const user: Person = { name: 'Elisabetta', age: 28 }
console.log(`${user.name} ha ${user.age} anni`);

// ✏️ Esercizio 3: Estendere un’interfaccia
// Partendo da interface Persona, crea una nuova interfaccia Student che aggiunge: corso.

interface Student extends Person {
    course: string
}

const student: Student = { name: 'Rebecca', age: 23, course: 'Biology' };
console.log(student);
