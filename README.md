# Coach Attendance Management — MVP

A frontend-only React + Vite coach attendance management app. It uses localStorage for persistence and generates printable PDF reports with jsPDF.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

The `dist/` output is ready for Vercel. No environment variables or backend are required.

## Deploy to Vercel

1. Push this folder to GitHub/GitLab/Bitbucket.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

## Data model

All application state lives in one localStorage key: `coach-attendance-mvp-v1`.

- `coach`: profile data
- `societies`: society membership and approval
- `students`: student profiles with `societyId`
- `attendance`: records keyed as `societyId|YYYY-MM-DD|studentId`
- `settings`: local preferences

The storage layer is isolated in `src/lib/storage.js`, making it straightforward to replace with API calls later.

## Included MVP features

- Dashboard with society/student/attendance KPIs and activity
- Multiple societies with simulated joining/approval
- Student add/edit/delete, search and filters
- Profile photo URL support
- Fast Present/Absent actions on student cards
- Society + date attendance register
- Mark all Present / Absent
- Attendance editing and completion progress
- Student performance analytics with monthly chart and present/absent chart
- Individual, society and daily PDF reports
- Coach settings
- JSON export/import backup
- Restore demo data
- Responsive mobile/tablet/desktop UI
- Vercel-ready Vite build

## Backend handoff

Keep UI components consuming the `data` object and replace the persistence functions in `src/lib/storage.js` with your API client. The attendance composite key already keeps society, date and student isolated from one another.
