# Educational Blockchain Project

Ένα εκπαιδευτικό **ομαδικό project blockchain**, υλοποιημένο με **Python**, **FastAPI** και προβλεπόμενο **React frontend**.  
Το project περιλαμβάνει τον βασικό πυρήνα ενός blockchain συστήματος, όπως blocks, transactions, hashing, proof of work, mining, validation, balance calculation, καθώς και REST API endpoints για αλληλεπίδραση με το σύστημα.

Ο στόχος του project είναι να δείξει με καθαρό και οργανωμένο τρόπο:
- πώς λειτουργεί ένας απλός blockchain μηχανισμός,
- πώς εκτίθεται μέσω backend API,
- και πώς μπορεί να παρουσιαστεί μέσω frontend εφαρμογής.

---

## Features

### Core Blockchain
- Block class
- Transaction class
- Blockchain class
- SHA256 hashing
- Proof of Work
- Mining mechanism
- Chain validation
- Balance calculation
- Overspending protection

### Backend
- FastAPI REST API
- Pydantic schemas
- Service layer
- Auto-generated API documentation
- Core tests
- Route tests

### Frontend (planned / in progress)
- Dashboard page
- Transactions page
- Mining page
- Balance lookup page
- Chain explorer
- API integration with backend

---

## Developer Documentation

Για οδηγίες εγκατάστασης, συνεργασίας και ανάπτυξης δείτε:

- `docs/GUIDE.md`
- `docs/FILE_RESPONSIBILITIES.md`
- `docs/API_SPEC.md`
- `docs/FRONTEND_PAGES.md`
- `docs/TESTING.md`

---

## Project Structure

```text
.
├── README.md
├── docs/
│   ├── API_SPEC.md
│   ├── ARCHITECTURE.md
│   ├── DEFINITION_OF_DONE.md
│   ├── FILE_RESPONSIBILITIES.md
│   ├── FRONTEND_PAGES.md
│   ├── FUNCTIONS.md
│   ├── GIT_WORKFLOW.md
│   ├── GUIDE.md
│   ├── MEMBER_TASKS.md
│   ├── PRESENTATION_NOTES.md
│   ├── TEAM_RULES.md
│   └── TESTING.md
│
├── backend/
│   ├── README.md
│   ├── requirements.txt
│   ├── run.py
│   ├── test_core.py
│   └── app/
│       ├── api/
│       │   └── routes.py
│       ├── core/
│       │   ├── block.py
│       │   ├── blockchain.py
│       │   ├── transaction.py
│       │   └── utils.py
│       ├── schemas/
│       │   ├── balance_schema.py
│       │   ├── block_schema.py
│       │   ├── mine_schema.py
│       │   ├── response_schema.py
│       │   └── transaction_schema.py
│       ├── services/
│       │   └── blockchain_service.py
│       ├── tests/
│       │   ├── test_block.py
│       │   ├── test_blockchain.py
│       │   ├── test_routes.py
│       │   └── test_transaction.py
│       └── main.py
│
└── frontend/
    ├── README.md
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    └── src/
        ├── main.tsx
        ├── App.tsx
        ├── index.css
        ├── components/
        ├── pages/
        ├── services/
        ├── types/
        └── utils/