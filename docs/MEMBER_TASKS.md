# MEMBER_TASKS.md

## Member 1 – Core Blockchain Developer
Αναλαμβάνει τον βασικό μηχανισμό του blockchain.

Υπευθυνότητες:
- Block class
- Transaction class
- Blockchain class
- SHA256 hashing
- Proof of Work
- Mining mechanism
- Chain validation
- Balance calculation
- Overspending protection
- Core unit tests

Δεν αναλαμβάνει:
- HTTP routes
- FastAPI schemas
- frontend UI

---

## Member 2 – Backend / API Developer
Αναλαμβάνει το REST API που εκθέτει τη λογική του blockchain.

Υπευθυνότητες:
- FastAPI app setup
- Route definitions
- Pydantic schemas
- Service layer
- API documentation
- Route tests
- Error handling
- CORS configuration
- Σύνδεση backend με frontend requirements

Δεν ξαναγράφει:
- core blockchain logic
- frontend logic

---

## Member 3 – Frontend Developer
Αναλαμβάνει την υλοποίηση του UI και τη σύνδεσή του με το backend.

Υπευθυνότητες:
- React + TypeScript + Vite setup
- Routing και layout
- Υλοποίηση pages:
  - Dashboard
  - Transactions
  - Mine
  - Balances
  - Chain Explorer
- Υλοποίηση reusable components:
  - Navbar
  - Layout
  - TransactionForm
  - MinePanel
  - BalanceCard
  - BlockCard
  - PendingTransactions
- API integration με FastAPI backend
- TypeScript types based on backend schemas
- Loading / success / error states
- Οπτικοποίηση blockchain δεδομένων
- Basic frontend validation
- Responsive και καθαρό UI για την παρουσίαση

Δεν αναλαμβάνει:
- proof of work logic
- blockchain validation logic
- backend business rules