# SuperAI Season 6 L2H4

A lightweight monorepo starter for hackathons, built with **npm workspaces** and **Turborepo**.

## Structure

```
.
├── apps/
│   └── web/                 # Next.js 16 + Tailwind CSS v4
├── packages/
│   └── ui/                  # Shared React + Tailwind UI components
├── package.json             # Root workspace configuration
└── turbo.json               # Turborepo pipeline
```

## Getting Started

Install all dependencies from the root:

```bash
npm install
```

Run the development server (Turborepo will orchestrate tasks across workspaces):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Available Scripts

| Command        | Description                                  |
|----------------|----------------------------------------------|
| `npm run dev`  | Start all apps in development mode           |
| `npm run build`| Build all apps and packages                  |
| `npm run lint` | Lint all apps and packages                   |
| `npm run clean`| Clean build artifacts and node_modules       |

## Adding a New Package

1. Create a new directory under `packages/`.
2. Add a `package.json` with `"name": "@repo/<package-name>"`.
3. Reference it from apps using `"@repo/<package-name>": "*"`.
4. Run `npm install` from the root to link workspaces.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Turborepo](https://turbo.build/)
- npm Workspaces
