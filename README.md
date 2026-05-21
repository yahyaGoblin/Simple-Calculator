# Simple Calculator

A terminal-based calculator built with TypeScript and Node.js. Uses an interactive prompt to take two numbers and a chosen operation, then prints the result.

## Preview

```
? Enter the first number: 12
? Enter the second number: 4
? Select the operation: (Use arrow keys)
❯ Add
  Subtract
  Multiply
  Divide

Result: 3
```

## Features

- Input validation — rejects non-numeric values with a helpful message
- Interactive arrow-key menu for selecting the operation
- Supports addition, subtraction, multiplication, and division
- Clean single-run flow — enter inputs, get result

## Requirements

- Node.js v16 or higher
- npm

## Setup

1. Clone or download the project folder
2. Install dependencies:

```bash
npm install
```

> This installs `inquirer`, which powers the interactive prompts.

## Running the Calculator

**Option 1 — with ts-node (no compile step):**
```bash
npx ts-node index.ts
```

**Option 2 — use the pre-compiled file:**
```bash
node index.js
```

## Project Structure

```
Simple Calculator/
├── index.ts          # Main source file
├── index.js          # Compiled output
├── package.json
├── package-lock.json
└── tsconfig.json
```

## How It Works

- `inquirer.prompt()` collects two numbers and the desired operation in sequence
- Each number input is validated with `parseFloat` and filtered to a `Number` type
- The operation is chosen from a list menu (no typos possible)
- A `switch` statement handles each of the four operations and logs the result

## Built With

- TypeScript
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) — interactive terminal prompts
