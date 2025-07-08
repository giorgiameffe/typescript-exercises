# 📘 Esercizi TypeScript – Tipi Speciali

Questa serie di esercizi si concentra sull'utilizzo e il comportamento dei **tipi speciali** in TypeScript. Sono fondamentali per scrivere codice sicuro, flessibile e ben tipizzato in situazioni più avanzate.

---

## 🧠 Argomenti trattati

### 🔹 `any`
- Rappresenta un valore di **tipo dinamico**.
- Disattiva completamente il controllo dei tipi → **usare con cautela**.
- Può essere riassegnato a valori di qualsiasi tipo (`string`, `number`, `array`, ecc.).

### 🔹 `unknown`
- Simile a `any`, ma **più sicuro**.
- Richiede un **controllo del tipo** (`typeof`, `instanceof`, ecc.) prima dell’uso.
- Utile per input sconosciuti, parsing JSON o dati dinamici.

### 🔹 `void`
- Indica che una funzione **non restituisce nulla**.
- Tipico per funzioni che eseguono effetti collaterali (es. `console.log`, `alert`, scrittura su file, ecc.).

### 🔹 `never`
- Indica che **non verrà mai restituito un valore**.
- Tipico per funzioni che **generano errori**, **ciclano all’infinito**, o **non terminano mai**.
- Aiuta TypeScript a garantire **controlli esaustivi**.

---

## 📁 Elenco esercizi

| Esercizio | Descrizione |
|----------:|-------------|
| 1         | Uso del tipo `any` con numeri, stringhe e booleani |
| 2         | Uso di `any` anche con array |
| 3         | Uso di `unknown` con controllo di tipo (`typeof`) |
| 4         | Errore nell’uso di `unknown` senza tipo di controllo e correzione |
| 5         | Funzione con ritorno `void` e `console.log` |
| 6         | Funzione con `void` che mostra un alert (commentato per ambiente Node) |
| 7         | Funzione con tipo di ritorno `never` che lancia un errore |
