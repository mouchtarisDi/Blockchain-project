# Blockchain Frontend

## Run locally

```bash
cd frontend
npm install
npm run dev
```

Frontend URL: `http://localhost:5173`
Backend URL expected: `http://127.0.0.1:8000`

## Pages
- Dashboard
- Transactions
- Mine
- Balances
- Chain Explorer
- Pending Transactions

## Note
The Pending page is ready in the frontend, but it needs a backend endpoint:
`GET /api/pending-transactions`
