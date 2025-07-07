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

// ✏️ Esercizio 4: Array di oggetti tipizzati
// Usa type o interface per definire un array di prodotti e stampali.

{
    type Products = {
        name: string,
        price: number,
        available: boolean
    }
    const products: Products[] = [
        { name: 'Ventilatore', price: 30, available: true },
        { name: 'Lavatrice', price: 400, available: false },
        { name: 'Lavastoviglie', price: 500, available: true }
    ]

    products.forEach((product) => {
        console.log(`Nome prodotto: ${product.name}, prezzo: ${product.price}, disponibilità: ${product.available}`)
    })
}

// ✏️ Esercizio 5: Estensione di type
// Crea un tipo Person con name e age
// Estendi Person in un nuovo tipo chiamato Employee, che aggiunge: role e salary
// Crea una variabile di tipo Employee e stampala.

{
    type Person = {
        name: string,
        age: number
    }

    type Employee = Person & {
        role: string,
        salary: number
    }

    const employee: Employee = {
        name: 'Antonio',
        age: 40,
        role: 'Archivista',
        salary: 1700
    }

    console.log(employee);
}


