# 📘 Esercizi Base Typescript - Tipi Primitivi

Questa serie di esercizi è pensata per approfondire l'utilizzo dei **tipi primitivi di TypeScript** e comprendere meglio il comportamento del linguaggio in fase di tipizzazione, esecuzione e confronto dei tipi.

---

## 🧠 Argomenti trattati

- **Tipi primitivi**:

   🔹 `string`
     - Rappresenta una sequenza di caratteri (testo).
     - Usata per nomi, frasi, colori, ecc.
     - Si scrive tra virgolette: `'ciao'`, `"ciao"` o `` `ciao` `` (template string).

    🔹 `number`
     - Rappresenta numeri interi o decimali.
     - Non distingue tra int e float.
     - Esempi: `5`, `3.14`, `-100`.

    🔹 `boolean`
     - Può essere solo `true` o `false`.
     - Usato in condizioni logiche.
     - Utile per esprimere stati, come `isOnline`, `isActive`, ecc.

    🔹 `null`
     - Rappresenta un valore intenzionalmente assente o vuoto.
     - Si assegna a una variabile quando vogliamo che sia "vuota", ma in modo esplicito.

    🔹 `undefined`
     - Indica che una variabile è stata dichiarata ma non ha ancora un valore.
     - È il valore predefinito per variabili non inizializzate.

    🔹 `bigint`
     - Serve per rappresentare numeri interi **molto grandi**, oltre il limite di `number`.
     - Si scrive aggiungendo una `n` alla fine: `123456789012345678901n`.
     - Permette operazioni come somma, sottrazione, moltiplicazione.

     🔹 `symbol`
     - Rappresenta un identificatore univoco.
     - Ogni `Symbol()` è diverso dagli altri, anche se ha la stessa descrizione.
     - Usato per creare proprietà private o uniche negli oggetti.

- **Operatori**:
  - Aritmetici: `+`, `-`, `*`
  - `typeof` per il controllo del tipo a runtime
  - Confronto tra simboli
- **Template literals** (interpolazione di stringhe)
- **Funzioni tipizzate**
- **Errori di tipo e conversione tra `number` e `bigint`**

---

## 📁 Elenco esercizi

| Esercizio | Descrizione |
|----------:|-------------|
| 1         | Variabile `fruit` di tipo `string` |
| 2         | Somma di due numeri (`number`) |
| 3         | Condizione con `boolean` |
| 4         | Variabile assegnata a `null` |
| 5         | Variabile assegnata a `undefined` e uso di `typeof` |
| 6         | Concatenazione di stringhe con template literals |
| 7         | Funzione che somma due numeri |
| 8         | Uso di `typeof` su diversi tipi primitivi |
| 9         | Dichiarazione di una variabile `boolean` con tipizzazione esplicita |
| 10        | Verifica del tipo `typeof` su `null` e `undefined` |
| 11        | Uso del tipo `bigint` e operazioni aritmetiche tra big integer |
| 12        | Somma di `number` e `bigint` (gestione errore e conversione) |
| 13        | Creazione di un `symbol` |
| 14        | Confronto tra due `symbol` con stessa descrizione |
