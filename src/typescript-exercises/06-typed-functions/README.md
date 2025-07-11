# 📘 Esercizi TypeScript: Funzioni Tipizzate

Questa raccolta di esercizi ti guida nell’uso delle funzioni in TypeScript, dalla semplice somma fino a funzioni con parametri di tipo oggetto e array.

---

## 🧠 Argomenti trattati

✅ Definizione di **funzioni** con parametri e valori di ritorno tipizzati

✅ Funzioni che restituiscono **valori primitivi** (number, string, boolean)

✅ Funzioni **void** per operazioni senza valore di ritorno (es. stampa su console)

✅ Uso di **array** come parametri di funzione

✅ Passaggio di **oggetti** come parametri con tipizzazione inline e tramite interface

---

## ▶️ Esecuzione (con TypeScript locale)

* Inizializza un nuovo progetto **Node.js** (se non l’hai già fatto):

```bash
npm init -y
```

* Installa **TypeScript** localmente come dipendenza di sviluppo:

```bash
npm install typescript --save-dev
```

* Aggiungi gli **script** nel package.json:

```json
"scripts": {
  "build": "tsc",
  "6": "node dist/typescript-exercises/06-typed-functions/exercises.js"
}
```

* Crea il file **TypeScript**:

```bash
src/typescript-exercises/06-typed-functions/exercises.ts
```

* **Verifica** che il file compilato venga salvato nella cartella dist/
* Assicurati che nel `tsconfig.json` siano presenti queste opzioni (o simili):

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
```

* **Compila** il progetto:

```bash
npm run build
```

* **Esegui** gli esercizi con lo script personalizzato:

```bash
npm run 6
```

---

## 🎯 Obiettivo

Questi esercizi sono pensati per:

* Imparare a scrivere **funzioni tipizzate** in TypeScript
* Gestire **parametri e valori di ritorno** di vari tipi
* Lavorare con **array e oggetti** come input delle funzioni
* Usare **interface** per tipizzare oggetti nei parametri delle funzioni