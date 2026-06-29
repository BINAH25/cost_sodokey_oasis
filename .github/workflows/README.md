# CI/CD — Build, Push & Deploy

`docker-build-push.yml` runs on every push to `main` (and manual dispatch):

1. **Build & push** the two images to Docker Hub, each tagged `latest` and
   `sha-<commit>`. Each image only rebuilds when its directory changed
   (`frontend/**` or `backend/**`).
   - `seyram11/oasis-frontend`
   - `seyram11/oasis-backend`
2. **Deploy**: SSH into the droplet and run
   `docker compose -f docker-compose.prod.yml pull && up -d` so the new images
   go live automatically.

## Required configuration

In the GitHub repo: **Settings → Secrets and variables → Actions** →
**Repository secrets** (not environment secrets).

### Secrets
| Name                 | Value                                                              |
| -------------------- | ------------------------------------------------------------------ |
| `DOCKERHUB_USERNAME` | Docker Hub username (e.g. `seyram11`)                              |
| `DOCKERHUB_TOKEN`    | Docker Hub **access token** (Account Settings → Security)          |
| `DEPLOY_HOST`        | Droplet public IP, e.g. `134.209.190.84`                          |
| `DEPLOY_USER`        | SSH user, e.g. `root`                                              |
| `DEPLOY_SSH_KEY`     | **Private** SSH key (PEM) whose public half is in the droplet's `~/.ssh/authorized_keys` |
| `DEPLOY_PATH`        | Directory on the droplet holding `docker-compose.prod.yml`, e.g. `/root/oasis` |

### Variables (optional)
| Name           | Value                                                                 |
| -------------- | --------------------------------------------------------------------- |
| `VITE_API_URL` | **Leave unset.** Single-domain deploy: nginx routes `/api/` to the backend, so the SPA uses relative URLs. Only set it if the API ever moves to a different domain. |

## Generating the deploy SSH key

On your machine (or the droplet), create a dedicated key for CI:

```bash
ssh-keygen -t ed25519 -C "github-actions" -f deploy_key -N ""
# Add the PUBLIC key to the droplet:
ssh-copy-id -i deploy_key.pub root@134.209.190.84
#   (or append deploy_key.pub to /root/.ssh/authorized_keys on the droplet)
# Put the PRIVATE key (contents of deploy_key) into the DEPLOY_SSH_KEY secret.
```

The droplet must already have `docker-compose.prod.yml`, `Caddyfile`, and `.env`
in `DEPLOY_PATH` (set up once during the initial deploy).

## Manual pull (if not using auto-deploy)

```bash
cd /root/oasis
docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d
```
