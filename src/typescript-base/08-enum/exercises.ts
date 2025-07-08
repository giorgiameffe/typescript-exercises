// ✏️ Esercizio 1: Giorni della settimana
// Crea un enum che contenga tutti i giorni della settimana, da Lunedi a Domenica.
// Stampa il valore numerico associato al giorno Venerdi.

enum WeekDays {
    Lunedi,
    Martedi,
    Mercoledi,
    Giovedi,
    Venerdi,
    Sabato,
    Domenica
}

console.log(WeekDays.Venerdi);

// ✏️ Esercizio 2: Livello accesso
// Crea un enum AccessLevel con valori personalizzati:
// User = 1
// Moderator = 5
// Admin = 10
// Scrivi una funzione describeAccess che stampi un messaggio diverso in base al livello.

enum AccessLevel {
    User = 1,
    Moderator = 5,
    Admin = 10
}

function describeAccess(level: AccessLevel): void {

    switch (level) {
        case AccessLevel.User:
            console.log('Sono uno User');
            break;
        case AccessLevel.Moderator:
            console.log('Sono un Moderator');
            break;
        case AccessLevel.Admin:
            console.log('Sono un Admin');
            break;
    }
}

describeAccess(AccessLevel.User);
describeAccess(AccessLevel.Moderator);
describeAccess(AccessLevel.Admin);

// ✏️ Esercizio 3: Stato ordine
// Crea un enum stringa StatoOrdine con i valori: "IN_ATTESA", "SPEDITO", "CONSEGNATO"
// Scrivi una funzione updateMsg(status: StatusOrder) che stampi un messaggio descrittivo per ogni stato.

enum StatusOrder {
    Pending = "in attesa",
    Shipped = "spedito",
    Delivered = "consegnato"
}

function updateMsg(status: StatusOrder): void {

    switch (status) {
        case StatusOrder.Pending:
            console.log('Il tuo ordine è in fase di elaborazione');
            break;
        case StatusOrder.Shipped:
            console.log('Il tuo ordine è stato spedito');
            break;
        case StatusOrder.Delivered:
            console.log('Il tuo ordine è stato consegnato');
    }
}

updateMsg(StatusOrder.Pending);
updateMsg(StatusOrder.Shipped);
updateMsg(StatusOrder.Delivered);

// ✏️ Esercizio 4: Ruolo e switch
// Crea un enum Ruolo con tre ruoli: Studente, Docente, Amministratore.
// Scrivi una funzione describeRole(r: Role) che usi uno switch per stampare una descrizione di ogni ruolo.

enum Role {
    Studente = "studente",
    Docente = "docente",
    Amministratore = "amministratore"
}


function describeRole(r: Role): void {

    switch (r) {
        case Role.Studente:
            console.log('Sono uno studente');
            break;
        case Role.Docente:
            console.log('Sono un docente');
            break;
        case Role.Amministratore:
            console.log("Sono l'amministratore");
    }
}

describeRole(Role.Studente);
describeRole(Role.Docente);
describeRole(Role.Amministratore);

// ✏️ Esercizio 6: Muoversi in una direzione
// Crea un enum stringa Direzione con: "nord", "sud", "est", "ovest".
// Scrivi una funzione move(d: Direction) che stampi: "Vai a nord", ecc.

enum Direction {
    Nord = 'nord',
    Sud = 'sud',
    Est = 'est',
    Ovest = 'ovest'
}

function move(d: Direction): void {

    switch (d) {
        case Direction.Nord:
            console.log('Vai a nord');
            break;
        case Direction.Sud:
            console.log('Vai a sud');
            break;
        case Direction.Est:
            console.log('Vai ad est');
            break;
        case Direction.Ovest:
            console.log('Vai ad ovest')
    }
}

move(Direction.Nord);
move(Direction.Sud);
move(Direction.Est);
move(Direction.Ovest);