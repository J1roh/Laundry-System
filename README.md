# Laundry POS

Point-of-sale for a laundry shop: a 5-step order wizard, receipts, live order tracking, reports with CSV export, and shop settings.

**Stack:** React 19 + TypeScript (Vite) · Supabase (Postgres, Auth, Realtime), run locally · Motion (`motion/react`) for animation · Tailwind CSS v4 · Recharts · lucide-react

## Run it

Requirements: Node 20+, Docker Desktop running.

```bash
npm install
npx supabase start          # first run pulls the Docker images
npx supabase status -o env  # copy API_URL and ANON_KEY into .env.local (see .env.example)
npm run dev                 # http://localhost:5173
```

Demo login: **cashier1 / pass123** (an admin, so Settings can be edited).

| Script | What it does |
|---|---|
| `npm run dev` / `build` / `preview` | Vite |
| `npm test` | Vitest unit tests (pricing, report stats, CSV escaping) |
| `npm run db:reset` | Rebuild the local DB from migrations + `supabase/seed.sql` |
| `npm run db:types` | Regenerate `src/lib/database.types.ts` after a schema change |
| `npm run db:stop` | Stop the local Supabase containers |

## Architecture

Feature-based modules. Each feature owns its UI, hooks and an `api.ts` that is its only Supabase access, and exposes a single `index.ts`.

```
src/
  app/        App, router, AppShell (auth guard + header + page transition)
  lib/        supabase client, generated DB types, domain types, formatting, CSV, order mapper
  shared/     ui/ (Button, Card, SelectCard, Input, Modal, Stepper, AnimatedNumber…), layout/, hooks/
  features/
    auth/         username → Supabase Auth login, profile context
    dashboard/    action cards
    transaction/  wizard reducer, pure pricing, steps/, customer lookup, create_order RPC
    receipt/      thermal receipt + print stylesheet (used by transaction and orders)
    orders/       live table (Realtime), status changes, search/filter
    reports/      stats (pure), charts, CSV export, date ranges
    settings/     price per kg, add-ons, machines, shop/receipt info
supabase/
  migrations/  schema, RLS, triggers, create_order RPC, order_details view
  seed.sql     demo user, settings, add-ons, machines
```

Dependency rule: features import from `shared/` and `lib/`, never from each other. The two exceptions are `auth` (app-wide session) and `receipt` (shared by transaction and orders).

### Data rules enforced in the database

- **Totals are computed on the server.** `create_order` recomputes weight × price per kg + add-ons from the current settings; the client's total is only a preview.
- Orders snapshot `price_per_kg` and add-on names/prices, so later price changes never rewrite history.
- Staff can change only an order's `status` (column-level grant); money fields are read-only once created.
- Self-service orders claim the first idle machine. Moving the order to *Done* or *Claimed* frees it (trigger).
- Settings, add-ons and machines can be edited only by `admin` profiles (RLS).

### Differences from the original prototype

- CSV export quotes its fields, so dates with commas no longer shift columns. Date and time are separate columns.
- The payment label reads "QR Code" (it was "Qr"), and the pie chart uses a legend with counts instead of clipped outside labels.
- The pie colors are blue/amber: the original blue/purple pair can't be told apart with deuteranopia.
- Added: returning-customer lookup/create, machine assignment, a Settings page, report date ranges, live order updates.
