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
// Crea un enum LivelloAccesso con valori personalizzati:
// Utente = 1
// Moderatore = 5
// Admin = 10
// Scrivi una funzione descriviAccesso(livello: LivelloAccesso) che stampi un messaggio diverso in base al livello.

// ✏️ Esercizio 3: Stato ordine
// Crea un enum stringa StatoOrdine con i valori: "IN_ATTESA", "SPEDITO", "CONSEGNATO"
// Scrivi una funzione aggiornaMessaggio(stato: StatoOrdine) che stampi un messaggio descrittivo per ogni stato.

// ✏️ Esercizio 4: Ruolo e switch
// Crea un enum Ruolo con tre ruoli: Studente, Docente, Amministratore.
// Scrivi una funzione descriviRuolo(r: Ruolo) che usi uno switch per stampare una descrizione del ruolo.

// ✏️ Esercizio 6: Muoversi in una direzione
// Crea un enum stringa Direzione con: "nord", "sud", "est", "ovest".
// Scrivi una funzione muovi(d: Direzione) che stampi: "Vai a nord", ecc.
