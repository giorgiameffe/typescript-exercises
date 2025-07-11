# 📘 Esercizi TypeScript: Type e Interface

Questa raccolta di esercizi introduce l’uso di **type alias** e **interface** in TypeScript per definire forme di dati, estenderle e tipizzare array di oggetti.

---

## 🧠 Argomenti trattati

✅ Creazione di **type alias** e **interface**

✅ Definizione di proprietà con tipi primitivi

✅ Estensione di interface e type per creare nuovi tipi basati su quelli esistenti

✅ Uso di array di oggetti tipizzati

✅ Differenze base tra type e interface

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
  "5": "node dist/typescript-exercises/05-type-interface/exercises.js"
}
```

* Crea il file **TypeScript**:

```bash
src/typescript-exercises/05-type-interface/exercises.ts
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
npm run 5
```

---

## 🎯 Obiettivo

* Apprendere a definire tipi personalizzati con **type** e **interface**
* Comprendere come **estendere tipi e interfacce** per modellare dati più complessi
* Gestire array di oggetti tipizzati
* Saper **scegliere** tra type e interface a seconda delle necessità