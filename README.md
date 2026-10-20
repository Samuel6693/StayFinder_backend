# StayFinder – backend

API for StayFinder, a service for finding and booking accommodations. Built with TypeScript, [Hono](https://hono.dev) and Supabase (PostgreSQL). Individual assignment for the Backend 2 course.

> Work in progress. More parts (authentication, properties, bookings, database rules and API test requests) are added as the project grows and will be documented here.

## Requirements
- Node.js 24
- npm
- A Supabase project (URL and publishable key)

## Getting started
1. Install dependencies:
   ```
   npm install
   ```
2. Create a `.env` file from `.env.example` and fill in the values:
   ```
   SUPABASE_URL=
   SUPABASE_PUBLISHABLE_KEY=
   ```
   `PORT` (default `3000`) and `NODE_ENV` (default `development`) are optional.
3. Start the development server:
   ```
   npm run dev
   ```
   The server listens on `http://localhost:3000`.

If a required environment variable is missing or has the wrong format, the server exits on startup with an error message showing which one.

## Scripts
| Command | What it does |
|---|---|
| `npm run dev` | Runs `src/index.ts` with `tsx` and restarts the server on changes |
| `npm run build` | Compiles TypeScript to `dist/` with `tsc` |
| `npm start` | Runs the compiled code in `dist/` (run `npm run build` first) |

## Endpoints
| Method | Path | Description |
|---|---|---|
| GET | `/` | Responds with JSON, used to check that the server is running |

## Secrets
`.env` is never committed. Do not share keys in the repository or in chat.
