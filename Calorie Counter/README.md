# Calorie Counter

A simple calorie tracking app to log meals, track daily totals, and visualize trends. Focused on minimal JS stack (React + Node) but adaptable to other frameworks.

# Link : https://calorie-counter19.netlify.app

## Features
- Add, edit, delete food entries (name, calories, date, meal type)
- Daily and weekly calorie summaries
- Persistent storage (local DB or server)
- Optional user accounts and authentication
- Export / import CSV
- Responsive UI with simple charts

## Tech stack (suggested)
- Frontend: React (Vite or Create React App), Tailwind or plain CSS
- Backend: Node.js + Express (optional for multi-user)
- Database: SQLite / PostgreSQL / MongoDB or localStorage for single-user
- Charts: Chart.js or Recharts
- Testing: Jest + React Testing Library

## Quick start (single-repo, localStorage)
Prerequisites: Node.js 16+

1. Create project
    - frontend: react + vite or CRA
2. Install
    - npm install
3. Run
    - npm run dev (or npm start)

## Minimal data model
- Entry
  - id: string
  - userId?: string
  - name: string
  - calories: number
  - date: ISO string
  - mealType: enum [breakfast, lunch, dinner, snack]
  - notes?: string

- User (optional)
  - id: string
  - email: string
  - passwordHash: string

## Example REST API (if using backend)
- POST /api/auth/login — login
- POST /api/auth/register — register
- GET /api/entries?date=YYYY-MM-DD — list entries
- POST /api/entries — create entry (body: Entry)
- PUT /api/entries/:id — update
- DELETE /api/entries/:id — delete
- GET /api/summary?start=YYYY-MM-DD&end=YYYY-MM-DD — aggregated totals

## Frontend pages/components
- Dashboard: daily total, quick add, recent entries, small chart
- Add/Edit Entry form
- History: filter by date/week/month, export CSV
- Profile / Settings: daily goals, units

## UI state shape (example)
- state.user
- state.entries: { byId, allIds }
- state.ui: { selectedDate, filters, loading }

## Persistence options
- Single-user: localStorage or IndexedDB
- Multi-user: REST API + DB (use SQLite for dev)

## Development checklist
- [ ] Project skeleton (frontend)
- [ ] Entry CRUD UI
- [ ] Local persistence or API
- [ ] Summary calculations + charts
- [ ] Authentication (optional)
- [ ] Tests and CI
- [ ] Export/Import CSV

## Deployment
- Frontend: Netlify, Vercel, or static hosting
- Backend: Heroku, Railway, or any Node host
- Database: Managed Postgres / SQLite for simple apps

## Contributing
- Fork, implement feature branch, open pull request with description and tests.

## License
Choose an OSI license (MIT recommended).

Next steps: tell me which stack you prefer (single-user localStorage or server-backed multi-user) and I will generate a starter file structure and example components/routes.
