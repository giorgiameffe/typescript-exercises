# 📘 Esercizi Base TypeScript

Questo progetto contiene una serie di esercizi introduttivi in TypeScript per prendere confidenza con variabili, tipi di dato, costanti, template string e concetti base della programmazione.

---

## 🧠 Argomenti trattati

✅ Dichiarazione di **variabili** con const e let

✅ **Tipi primitivi**: string, number, boolean

✅ **Inferenza di tipo**

✅ **Operazioni matematiche** di base (somma)

✅ **Template string** (stringhe interpolate)

✅ Comprensione degli **errori di tipo**

✅ Dichiarazione di **variabili multiple** in una sola riga

---

## ▶️ Esecuzione (con TypeScript locale)

- Inizializza un nuovo progetto **Node.js** (se non l’hai già fatto):

```
npm init -y
```

- Installa **TypeScript** localmente come dipendenza di sviluppo:

```
npm install typescript --save-dev
```

- Aggiungi gli **script** nel package.json:

```
"scripts": {
  "build": "tsc",
  "1": "node dist/typescript-exercises/01-variables/exercises.js"
}
```

* Crea il file **TypeScript**:

```
src/typescript-exercises/01-variables/exercises.ts
```

* **Inizializza** il file di configurazione TypeScript (se non esiste):

```
npx tsc --init
```

* **Verifica** che il file compilato venga salvato nella cartella dist/
* Assicurati che nel `tsconfig.json` siano presenti queste opzioni (o simili):

```
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
```

* **Compila** il progetto:

```
npm run build
``` 

- **Esegui** gli esercizi con lo script personalizzato:

```
npm run 1
```
---

## 🎯 Obiettivo

Questi esercizi sono pensati per:

- Comprendere la **sintassi base** di TypeScript
- Familiarizzare con i **tipi primitivi** (string, number, boolean)
- Usare correttamente const/let e **tipizzazione implicita/esplicita**
- Riconoscere e correggere **errori di tipo**
- Imparare a compilare e eseguire codice TypeScript in un **ambiente locale**