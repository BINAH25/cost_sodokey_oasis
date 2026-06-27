# Oasis Backend (Django + DRF)

REST API for the Oasis Massage & Wellness website. Handles **appointment
bookings** and **customer feedback** submitted from the frontend.

- **Dev database:** SQLite (zero config, bundled).
- **Production database:** PostgreSQL (via the Docker Compose `db` service).

## API endpoints

| Method | Path                  | Purpose                              |
| ------ | --------------------- | ------------------------------------ |
| GET    | `/api/health/`        | Health check                         |
| POST   | `/api/appointments/`  | Create a booking (modal + contact form) |
| POST   | `/api/feedback/`      | Submit feedback / a review           |
| —      | `/admin/`             | Django admin to review submissions   |

### Appointment payload
```json
{
  "name": "Ama Mensah",
  "email": "ama@example.com",
  "phone": "+233 24 000 0000",
  "service": "Deep Tissue Massage",
  "location": "home",          // "sanctuary" | "home"
  "date": "2026-07-01",         // optional (contact form omits it)
  "time": "14:30",              // optional
  "message": "Lower back pain"  // optional
}
```

### Feedback payload
```json
{ "name": "Esi", "rating": 5, "message": "Wonderful experience!" }
```

## Local development

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

cp .env.example .env          # adjust if needed

python manage.py migrate
python manage.py createsuperuser   # to access /admin/
python manage.py runserver         # serves on http://127.0.0.1:8000
```

The frontend reads `VITE_API_URL` (see `frontend/.env`); it defaults to
`http://127.0.0.1:8000`, so the two work together out of the box.

## Production (Docker Compose)

From the repo root:

```bash
docker compose up --build
```

This starts three services:
- `db` — PostgreSQL 16 (data persisted in the `postgres_data` volume)
- `backend` — Django served by gunicorn on `:8000` (runs migrations on startup)
- `frontend` — the built site on `:80`

Override secrets/hosts via environment variables (see `docker-compose.yml`):
`SECRET_KEY`, `ALLOWED_HOSTS`, `CORS_ALLOWED_ORIGINS`, `CSRF_TRUSTED_ORIGINS`.

Create an admin user inside the running container:

```bash
docker compose exec backend python manage.py createsuperuser
```

## Configuration (environment variables)

| Variable               | Default (dev)                         | Notes                                   |
| ---------------------- | ------------------------------------- | --------------------------------------- |
| `SECRET_KEY`           | insecure dev key                      | **Set a strong value in production.**   |
| `DEBUG`                | `False`                               | `True` for local dev                    |
| `ALLOWED_HOSTS`        | `localhost,127.0.0.1`                 | comma-separated                         |
| `DATABASE_URL`         | bundled SQLite                        | `postgres://user:pass@host:5432/db`     |
| `CORS_ALLOWED_ORIGINS` | `http://localhost:5173, ...`          | frontend origin(s)                      |
| `CSRF_TRUSTED_ORIGINS` | empty                                 | your https domain in production         |
| `ANON_THROTTLE_RATE`   | `30/hour`                             | anti-spam limit on public submissions   |
| `TIME_ZONE`            | `Africa/Accra`                        |                                         |
