# 📘 Esercizi TypeScript – Tipi Primitivi e Operazioni

Questa raccolta di esercizi in TypeScript è pensata per approfondire la conoscenza dei tipi primitivi, operatori, funzioni e costrutti fondamentali del linguaggio.

---

## 🧠 Argomenti trattati

✅ **Tipi primitivi**: string, number, boolean, null, undefined, bigint, symbol

✅ **Operatori matematici**: somma, sottrazione, moltiplicazione

✅ Concatenazione di **stringhe** con *template literals*

✅ **Funzioni tipizzate**

✅ Uso del costrutto ```if``` con booleani

✅ Verifica del tipo con ```typeof```

✅ Differenze tra ```null``` e ```undefined```

✅ Uso e confronto dei **Symbol**

---

## ▶️ Esecuzione (con TypeScript locale)


* Inizializza un nuovo progetto **Node.js** (se non l’hai già fatto):

```
npm init -y
```

* Installa **TypeScript** localmente come dipendenza di sviluppo:

```
npm install typescript --save-dev
```

* Aggiungi gli **script** nel package.json:

```
"scripts": {
  "build": "tsc",
  "2": "node dist/typescript-exercises/02-primitive-data/exercises.js"
}
```

* Crea il file **TypeScript**:

```
src/typescript-exercises/02-primitive-data/exercises.ts
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


* **Esegui** gli esercizi con lo script personalizzato:

```
npm run 2
```
---

## 🎯 Obiettivo

Questi esercizi ti aiuteranno a:

- Comprendere e utilizzare correttamente i **tipi primitivi**
- Rafforzare la sintassi e le **regole di tipizzazione** di TypeScript
- Usare operatori, funzioni, condizioni e strumenti come ```typeof```
- Gestire correttamente ```null```, ```undefined``` e ```symbol```