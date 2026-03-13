
---

# `docs/TESTING.md`

```md
# TESTING.md

## Σκοπός

Το αρχείο αυτό περιγράφει τους ελέγχους που πρέπει να γίνονται στο project.

Περιλαμβάνει:
- backend automated tests
- backend manual checks
- frontend manual checks
- πριν από merge / push

---

## 1. Backend Automated Tests

Υπάρχουν ήδη τα παρακάτω test files:

- `backend/app/tests/test_block.py`
- `backend/app/tests/test_transaction.py`
- `backend/app/tests/test_blockchain.py`
- `backend/app/tests/test_routes.py`

### Τι ελέγχουν

#### `test_block.py`
- σωστή δημιουργία block
- βασικά attributes block
- σωστή μετατροπή σε dictionary αν υπάρχει σχετικό test

#### `test_transaction.py`
- σωστή δημιουργία transaction
- σωστά transaction fields
- serialization της συναλλαγής

#### `test_blockchain.py`
- δημιουργία genesis block
- proof of work
- mining flow
- chain validation
- σωστό balance calculation
- overspending protection

#### `test_routes.py`
- response codes
- response bodies
- transaction creation endpoint
- mining endpoint
- chain endpoint
- balance endpoint
- validate endpoint
- latest block endpoint

---

## 2. Εκτέλεση Backend Tests

Από τον φάκελο `backend`:

```bash
python -m pytest -q