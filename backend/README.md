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

Two ways to run the stack from the repo root:

**A. Pull prebuilt images from Docker Hub** (recommended on the server — no
source build needed). Images are published by CI as
`seyram11/oasis-frontend` and `seyram11/oasis-backend`:

```bash
cp .env.prod.example .env   # then fill in SECRET_KEY, POSTGRES_PASSWORD, domain
docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d
```

**B. Build locally from source:**

```bash
docker compose up --build
```

The production stack (`docker-compose.prod.yml`) runs four services:
- `caddy` — public entry point on `:80`/`:443`; terminates TLS with automatic
  Let's Encrypt certificates and proxies to the frontend. Redirects http→https
  and `www`→apex. Certs persist in the `caddy_data` volume.
- `frontend` — nginx serving the SPA **and** reverse-proxying `/api/`, `/admin/`,
  and `/static/` to the backend (internal only, reached by Caddy)
- `backend` — Django served by gunicorn (runs migrations on startup); reachable
  only on the internal network at `http://backend:8000` (no published port)
- `db` — PostgreSQL 16 (data persisted in the `postgres_data` volume)

Everything lives on **one domain** (e.g. `oasismassagewellness.com`): nginx
routes `/api/` to Django, so the frontend calls the API same-origin — no
separate API subdomain and no CORS needed in production.

### TLS / HTTPS

Caddy obtains and auto-renews Let's Encrypt certificates with no extra steps —
just point the domain's DNS at the server and set `DOMAIN` and `ACME_EMAIL` in
`.env`. Requirements:
- Ports **80 and 443** open to the internet (Let's Encrypt validates over both).
- DNS `A`/`AAAA` records for the apex domain (and `www`) pointing at the server
  **before** first start, or cert issuance will fail.

The build-from-source `docker-compose.yml` (option B) has **no TLS** and exposes
the frontend on `:80` — use it for local/dev only.

Override secrets/hosts via environment variables (see `docker-compose.yml`):
`SECRET_KEY`, `ALLOWED_HOSTS`, `CSRF_TRUSTED_ORIGINS`.

Create an admin user inside the running container (add
`-f docker-compose.prod.yml` when using the prebuilt-images stack):

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
