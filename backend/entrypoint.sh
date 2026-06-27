#!/bin/sh
set -e

# Apply database migrations on startup so a fresh Postgres volume is initialised.
echo "Applying database migrations..."
python manage.py migrate --noinput

# Hand off to the container CMD (gunicorn).
exec "$@"
