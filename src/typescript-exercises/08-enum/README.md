# 📘 Esercizi Base TypeScript: Enum

Questi esercizi ti aiutano a comprendere l’uso degli **enum** in TypeScript, che permettono di definire insiemi di valori nominati, sia numerici sia stringa, utili per rappresentare stati, ruoli, giorni e molto altro.

---

## 🧠 Argomenti trattati

✅ Creazione di **enum numerici** con valori di default

✅ Creazione di **enum numerici con valori personalizzati**

✅ Uso di **enum stringa** per valori più descrittivi

✅ Funzioni che accettano parametri di tipo enum e usano **switch-case** per gestirli

✅ Differenze tra enum numerici e stringa

---

## ▶️ Esecuzione (con TypeScript locale)

* Inizializza un nuovo progetto **Node.js** (se non l’hai già fatto):

```bash
npm init -y
```

* Installa **TypeScript** come dipendenza di sviluppo:

```bash
npm install typescript --save-dev
```

* Aggiungi gli **script** nel package.json:

```json
"scripts": {
  "build": "tsc",
  "8": "node dist/typescript-exercises/08-enum/exercises.js"
}
```

* Crea il file **TypeScript**:

```bash
src/typescript-exercises/08-enum/exercises.ts
```
* Inizializza il file di configurazione TypeScript (se non esiste):

```
npx tsc --init
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
npm run 8
```

---

## 🎯 Obiettivo

* Creare e usare **enum numerici** per rappresentare insiemi di valori ordinati
* Definire **enum con valori personalizzati**, sia numerici che stringa
* Utilizzare **switch-case** per gestire facilmente i valori degli enum
* Scrivere funzioni tipizzate che accettano solo valori dell’enum