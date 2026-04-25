# Hendri Portfolio 2026

Portfolio baru untuk menggantikan situs lama Kraken Team, dibangun dengan struktur terpisah:

- `frontend`: Vite + TypeScript (UI portfolio)
- `backend`: Node.js + Express (API profile)

## 1) Jalankan project di lokal

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend aktif di `http://localhost:8080`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend aktif di `http://localhost:5173`.

## 2) Build frontend

```bash
cd frontend
npm run build
```

Output build ada di folder `frontend/dist`.

## 3) Upload ke GitHub (repo baru)

Masuk ke folder root project:

```bash
cd "D:\03.Personal\Backup Github\krakennetlify"
git init
git add .
git commit --no-trailer -m "Initialize new 2026 portfolio with separated frontend and backend"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

## 4) Deploy

### Opsi A - Netlify (frontend saja)

- Build command: `npm run build`
- Publish directory: `frontend/dist`
- Base directory: `frontend`

### Opsi B - Fullstack

- Frontend deploy di Netlify/Vercel
- Backend deploy di Railway/Render/Fly.io
- Set env frontend:
  - `VITE_API_URL=https://<backend-domain>`

## Sumber referensi brand lama

Detail profil lama Kraken Team:
[Kraken Team - IT Consultants & Blockchain Specialists](https://krakenteam.netlify.app/)
