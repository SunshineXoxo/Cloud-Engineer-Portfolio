# Sunshine Portfolio

Personal portfolio for Makanaka Kaguda, a Cloud Computing and IoT student building toward Azure cloud engineering roles.

## Project structure

- `frontend/`: static portfolio site built with HTML, CSS, and vanilla JavaScript
- `frontend/images/`: images used by the deployed static site
- `backend/`: optional lightweight Java HTTP server for local API experiments
- `preview-static.mjs`: dependency-free local preview server for the static site

## Run locally

Static preview, recommended for hosting checks:

```powershell
node preview-static.mjs
```

Then open:

```text
http://127.0.0.1:8090
```

Optional Java backend preview:

```powershell
cd backend
powershell -ExecutionPolicy Bypass -File .\build.ps1
$env:PORTFOLIO_PORT="8081"
powershell -ExecutionPolicy Bypass -File .\run.ps1
```

Then open:

```text
http://localhost:8081
```

## Free hosting

The site is ready to deploy as a static site from the `frontend/` folder.

Recommended option: Netlify

1. Push this folder to GitHub.
2. Create a new Netlify site from the repository.
3. Set the publish directory to `frontend`.
4. Leave the build command empty.
5. Deploy.

Also supported:

- Vercel: set the project root directory to `frontend`.
- GitHub Pages: publish the `frontend/` folder as the site root. The included `404.html` supports direct links such as `/projects`.

## Contact form

The contact form opens a prepared email draft, so it works on free static hosting without a backend service. The Java backend can still be used later if a hosted API is added.
