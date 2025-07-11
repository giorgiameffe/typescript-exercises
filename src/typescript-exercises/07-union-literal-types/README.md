# 📘 Esercizi Base TypeScript: Union Types e Literal Types

Questi esercizi introducono l’uso avanzato di **tipi** in TypeScript, come **union types** e **literal types**, utili per gestire valori che possono assumere più forme o valori **letterali precisi**.

---

## 🧠 Argomenti trattati

✅ **Union types** per accettare più tipi in un parametro o variabile

✅ **Literal types** per limitare un valore a stringhe o numeri specifici

✅ Combinazione di **union** e **literal types** tramite **type aliases**

✅ Uso di **funzioni** con parametri tipizzati tramite union e literal types

✅ Strutture di controllo condizionali (**if**, **switch**) basate su literal types

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
  "7": "node dist/typescript-exercises/07-union-literal-types/exercises.js"
}
```

* Crea il file **TypeScript**:

```bash
src/typescript-exercises/07-union-literal-types/exercises.ts
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
npm run 7
```

---

## 🎯 Obiettivo

Con questi esercizi potrai:

* Imparare a scrivere **funzioni** e **variabili** con **union types**

* Definire valori limitati tramite **literal types**

* Combinare tipi per modellare dati complessi con **type alias**

* Gestire logicamente valori differenti con **controlli di tipo**