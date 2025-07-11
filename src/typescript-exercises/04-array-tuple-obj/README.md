# 📘 Esercizi TypeScript: Array, Tuple e Oggetti

Questa raccolta di esercizi introduce l’uso di **array**, **tuple** e **oggetti** in TypeScript, aiutandoti a padroneggiare la loro sintassi, tipizzazione e manipolazione.

---

## 🧠 Argomenti trattati

✅ Creazione e iterazione di array tipizzati

✅ Funzioni per filtrare e sommare elementi in array

✅ Definizione e utilizzo di tuple con tipi fissi e lunghezza definita

✅ Creazione di oggetti con proprietà tipizzate

✅ Manipolazione e lettura di proprietà di oggetti

✅ Gestione di array di oggetti e filtri complessi

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
  "4": "node dist/typescript-exercises/04-arrays-tuples-obj/exercises.js"
}
```

* Crea il file **TypeScript**

```bash
src/typescript-exercises/04-arrays-tuples-obj/exercises.ts
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
npm run 4
```

---

## 🎯 Obiettivo

Questi esercizi sono pensati per:

* Apprendere a dichiarare e usare **array tipizzati** in TypeScript
* Utilizzare **tuple** per dati con struttura fissa e tipi specifici
* Creare e manipolare oggetti con **proprietà** definite e **tipizzate**
* Lavorare con array di oggetti, **filtraggio** e **iterazione**
* Imparare a scrivere **funzioni** che operano su strutture dati complesse