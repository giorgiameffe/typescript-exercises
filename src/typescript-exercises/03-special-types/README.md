# 📘 Esercizi TypeScript – Tipi Speciali

Questo progetto contiene esercizi introduttivi in TypeScript focalizzati sulla gestione dei tipi speciali **any**, **unknown**, **void** e **never**, per comprendere come funzionano e quando usarli correttamente.

---

## 🧠 Argomenti trattati

✅ Uso del tipo **any** per assegnare valori di tipi diversi a una stessa variabile

✅ Uso del tipo **unknown** e controlli di tipo per gestire valori incerti

✅ Gestione degli **errori di tipo** con il tipo unknown

✅ Funzioni con tipo di ritorno **void** (funzioni senza valore di ritorno)

✅ Funzioni con tipo di ritorno **never** (funzioni che non terminano mai normalmente, es. lancio di errori)

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
  "3": "node dist/typescript-exercises/03-special-types/exercises.js"
}
```

* Crea il file **TypeScript**

```bash
src/typescript-exercises/03-special-types/exercises.ts
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

* Compila il progetto:

```bash
npm run build
```

* Esegui gli esercizi con lo script personalizzato:

```bash
npm run 3
```

---

## 🎯 Obiettivo

Questi esercizi sono pensati per:

* Imparare a gestire variabili con tipi dinamici tramite **any** e **unknown**
* Capire l’importanza di **controlli di tipo** per evitare errori in fase di esecuzione
* Apprendere la definizione e l’uso di funzioni che non restituiscono nulla (**void**)
* Conoscere funzioni che non terminano mai normalmente (**never**), come quelle che lanciano errori