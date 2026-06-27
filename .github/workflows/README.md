# CI/CD — Docker Hub

`docker-build-push.yml` builds and pushes the two images to Docker Hub on every
push to `main` (and on manual dispatch):

- `seyram11/oasis-frontend`
- `seyram11/oasis-backend`

Each job only runs when its directory (`frontend/**` or `backend/**`) changed,
and pushes two tags: `latest` and the full commit SHA (`sha-<commit>`).

## Required configuration

In the GitHub repo: **Settings → Secrets and variables → Actions**.

### Secrets
| Name                 | Value                                                            |
| -------------------- | --------------------------------------------------------------- |
| `DOCKERHUB_USERNAME` | Your Docker Hub username (e.g. `seyram11`)                       |
| `DOCKERHUB_TOKEN`    | A Docker Hub **access token** (Account Settings → Security) — not your password |

### Variables
| Name           | Value                                                                 |
| -------------- | --------------------------------------------------------------------- |
| `VITE_API_URL` | Production API base URL baked into the frontend bundle, e.g. `https://api.oasismassagewellness.com` |

> The frontend is a static Vite build, so `VITE_API_URL` is compiled in at
> **build time**. If it's not set, the frontend will fall back to
> `http://127.0.0.1:8000`, which won't work in production.

## Pulling the images

```bash
docker pull seyram11/oasis-frontend:latest
docker pull seyram11/oasis-backend:latest
```
