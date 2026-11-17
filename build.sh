#!/usr/bin/env bash
# Exit immediately if a command exits with a non-zero status
set -o errexit

echo "==> Installing Python dependencies..."
python -m pip install --upgrade pip
pip install -r requirements.txt

echo "==> Running collectstatic..."
python manage.py collectstatic --no-input --clear

echo "==> Applying database migrations..."
python manage.py migrate --no-input

echo "==> Seeding recipe dataset..."
python manage.py seed_recipes

echo "==> Build completed successfully!"
