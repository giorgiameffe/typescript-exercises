# 📘 TypeScript Fundamentals

Questa repository contiene una raccolta di esercizi progressivi per imparare TypeScript in modo pratico.   
Ogni cartella affronta un **tema specifico**, con esempi ed esercizi da eseguire localmente tramite Node.js e TypeScript.

> ✅ Ideale per chi vuole imparare TypeScript **da zero** o rafforzare le proprie competenze con esempi concreti.

---

## 📂 Struttura degli esercizi

| Cartella | Argomento principale | Descrizione |
|---------|----------------------|-------------|
| `01-variables` | Variabili e Tipi Primitivi | Introduzione a `const`, `let`, inferenza di tipo, stringhe interpolate |
| `02-primitive-data` | Tipi Primitivi e Operazioni | Uso di `number`, `boolean`, `null`, `undefined`, `symbol`, operatori e funzioni base |
| `03-special-types` | Tipi Speciali | Approfondimento su `any`, `unknown`, `void`, `never` |
| `04-arrays-tuples-obj` | Array, Tuple e Oggetti | Creazione, iterazione e manipolazione di strutture dati |
| `05-type-interface` | Type Alias e Interface | Definizione e estensione di `type` e `interface` |
| `06-typed-functions` | Funzioni Tipizzate | Funzioni con parametri e ritorni tipizzati, oggetti, array |
| `07-union-literal-types` | Union & Literal Types | Uso combinato di tipi unione e letterali per controlli più precisi |
| `08-enum` | Enum | Enum numerici e stringa, utilizzo con `switch` e funzioni |

---

## ▶️ Come eseguire gli esercizi

> Assicurati di avere **Node.js** e **Typescript** installati nel tuo sistema.

1. Clona la repository:

```bash
git clone https://github.com/giorgiameffe/typescript-fundamentals.git
cd typescript-fundamentals
````

2. Inizializza il progetto:

```bash
npm install
```

3. Compila il progetto TypeScript:

```bash
npm run build
```

4. Esegui gli esercizi di una lezione (es. lezione 1)::

```bash
npm run 1
```

Ogni script corrisponde a una cartella numerata da `1` a `8`.

---

## ⚙️ Configurazione TypeScript

Assicurati che il file `tsconfig.json` contenga almeno:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
```

---

## 🎯 Obiettivi del progetto

✅ Imparare la sintassi base di TypeScript

✅ Comprendere i tipi primitivi e avanzati

✅ Utilizzare correttamente le funzioni tipizzate

✅ Manipolare oggetti, array, tuple

✅ Gestire tipi complessi e strutturati (`type`, `interface`, `enum`)

✅ Migliorare l'affidabilità del codice tramite il controllo dei tipi

---

## 📌 Note

* Ogni esercizio è indipendente e contenuto nel percorso `src/typescript-exercises/NOME-CARTELLA/`.
* Gli script per l’esecuzione si trovano nel `package.json`.
* Gli output compilati vengono salvati nella cartella `dist/`.