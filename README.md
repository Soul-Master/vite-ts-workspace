# Vite + TypeScript Workspace Template

This repo is a template for a Vite-powered React app plus colocated component packages in a single npm workspace. It is designed for fast local development, type-safe builds, and easy extraction of reusable packages.

**What this template gives you**
- A root app served by Vite (`src/`).
- Multiple component packages under `packages/` built with TypeScript project references.
- Workspace linking so the app can import local packages by name.

## Project Structure

```
vite-ts-workspace
|-- packages
|   |-- component-a
|   |-- component-b
|   |-- component-c
|-- src
|-- package.json
|-- tsconfig.base.json
`-- tsconfig.json
```

- `src/`: The main React app entry and app-specific `tsconfig.json`.
- `packages/`: Each package is a small TypeScript library with its own `package.json` and `tsconfig.json`.
- `packages/core/`: Reserved for shared utilities or types (currently empty).
- `tsconfig.json`: Root project references that wire the app to all packages.
- `tsconfig.base.json`: Shared compiler options for all projects.

## Quick Start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the dev server:

   ```bash
   npm run dev
   ```

## Build and Preview

- Type-check and build all referenced projects:

  ```bash
  npm run build
  ```

- Build the production app bundle:

  ```bash
  npm run release
  ```

- Preview the production build:

  ```bash
  npm run serve
  ```

## Adding a New Package

1. Create a folder in `packages/your-package` with `package.json` (name, version, scripts, exports), `tsconfig.json` (extends `../../tsconfig.base.json`), and `index.tsx` or `index.ts`.
2. Add the package to root references in `tsconfig.json`.
3. (Optional) Add a `paths` entry in `src/tsconfig.json` for editor friendliness.

## Package Conventions

Existing packages (`component-a`, `component-b`, `component-c`) are small React exports compiled by TypeScript into `dist/`. They are meant as examples you can copy or replace.

## Notes

- `npm run start` runs install, then a TypeScript build, then the Vite dev server. It is intended for fresh machines.
- Workspace dependencies are resolved via npm workspaces (`packages/*`).
