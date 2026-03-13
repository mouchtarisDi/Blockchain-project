# FRONTEND_PAGES.md

## Σκοπός
Το αρχείο αυτό περιγράφει τις βασικές σελίδες του frontend, τον ρόλο τους και τη σύνδεσή τους με το backend API.

---

## 1. Dashboard

### Σκοπός
Η αρχική σελίδα της εφαρμογής. Δείχνει συνοπτική εικόνα της κατάστασης του blockchain.

### Εμφανίζει
- latest block
- συνολικό μήκος chain
- validation status
- σύντομη επισκόπηση του συστήματος

### Endpoints
- `GET /api/latest-block`
- `GET /api/chain`
- `GET /api/validate`

### Components
- `BlockCard`
- `PendingTransactions` (αν υπάρχει endpoint)
- `Layout`

---

## 2. Transactions Page

### Σκοπός
Δημιουργία νέας συναλλαγής.

### Εμφανίζει
- φόρμα με sender
- φόρμα με receiver
- φόρμα με amount
- success/error messages

### Endpoints
- `POST /api/transactions`

### Components
- `TransactionForm`
- `Layout`

### User Actions
- συμπλήρωση στοιχείων συναλλαγής
- submit
- εμφάνιση αποτελέσματος

---

## 3. Mine Page

### Σκοπός
Εκτέλεση mining για όλες τις pending transactions.

### Εμφανίζει
- input για miner address
- κουμπί mine
- αποτέλεσμα mining
- εμφάνιση νέου block

### Endpoints
- `POST /api/mine`

### Components
- `MinePanel`
- `BlockCard`
- `Layout`

---

## 4. Balances Page

### Σκοπός
Αναζήτηση και εμφάνιση balance για συγκεκριμένο address.

### Εμφανίζει
- input για address
- κουμπί αναζήτησης
- κάρτα balance

### Endpoints
- `GET /api/balance/{address}`

### Components
- `BalanceCard`
- `Layout`

---

## 5. Chain Explorer

### Σκοπός
Εμφάνιση ολόκληρης της αλυσίδας των blocks.

### Εμφανίζει
- λίστα όλων των blocks
- block details
- transactions κάθε block
- hash / previous_hash / nonce / timestamp

### Endpoints
- `GET /api/chain`

### Components
- `BlockCard`
- `Layout`

---

## 6. Pending Transactions View

### Σκοπός
Εμφάνιση των συναλλαγών που δεν έχουν γίνει ακόμα mine.

### Endpoints
- `GET /api/pending-transactions` (προτεινόμενο νέο endpoint)

### Components
- `PendingTransactions`

---

## Γενικές απαιτήσεις frontend
- καθαρό και κατανοητό UI
- error handling
- loading states
- σωστό formatting timestamps και hashes
- διαχωρισμός UI logic από API calls