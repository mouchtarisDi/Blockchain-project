
---

# `docs/FILE_RESPONSIBILITIES.md`

```md
# FILE_RESPONSIBILITIES.md

## Σκοπός

Το αρχείο αυτό ορίζει τον ρόλο κάθε αρχείου του project.

Κάθε μέλος πρέπει να γράφει μόνο το περιεχόμενο που ανήκει στο συγκεκριμένο αρχείο.

Δεν μεταφέρουμε λογική σε λάθος σημείο και δεν προσθέτουμε άσχετο κώδικα.

---

# ROOT

## .gitignore
Περιέχει αρχεία και φακέλους που δεν πρέπει να ανεβαίνουν στο Git.

## README.md
Κεντρική περιγραφή του project:
- τι είναι
- τεχνολογίες
- setup
- βασικά features
- πώς τρέχει
- συνολική δομή project

---

# DOCS

## docs/ARCHITECTURE.md
Περιγράφει τη συνολική αρχιτεκτονική του project.

## docs/TEAM_RULES.md
Περιγράφει κανόνες συνεργασίας και scope.

## docs/GIT_WORKFLOW.md
Περιγράφει branches, commits, merge flow.

## docs/FUNCTIONS.md
Περιγράφει τις βασικές functions / methods / endpoints.

## docs/API_SPEC.md
Περιγράφει τα endpoints, request bodies και responses του backend.

## docs/FRONTEND_PAGES.md
Περιγράφει τις σελίδες και τα βασικά UI στοιχεία του frontend.

## docs/TESTING.md
Περιγράφει τι tests πρέπει να γίνουν και τι ελέγχουμε.

## docs/PRESENTATION_NOTES.md
Περιγράφει βασικά σημεία που θα παρουσιαστούν στην τελική εργασία.

## docs/FILE_RESPONSIBILITIES.md
Περιγράφει τον ρόλο κάθε αρχείου του project.

## docs/GUIDE.md
Περιγράφει setup, τοπική εκτέλεση και workflow συνεργασίας.

---

# BACKEND

## backend/README.md
Τοπικό README μόνο για το backend:
- εγκατάσταση
- dependencies
- τρόπος εκτέλεσης
- tests

## backend/requirements.txt
Όλα τα Python dependencies του backend.

## backend/run.py
Απλό entry point για εύκολη εκκίνηση του backend.

## backend/test_core.py
Απλό script χειροκίνητου ελέγχου του blockchain flow εκτός API.

---

# BACKEND / APP

## backend/app/__init__.py
Αρχείο package initialization. Δεν περιέχει business logic.

## backend/app/main.py
Δημιουργία FastAPI app και σύνδεση routes.

Περιέχει:
- app initialization
- app metadata
- middleware registration
- route registration

Δεν περιέχει:
- core blockchain logic
- mining implementation
- balance calculation logic

---

# BACKEND / API

## backend/app/api/__init__.py
Package init file.

## backend/app/api/routes.py
Όλα τα REST API routes.

Περιέχει:
- route definitions
- λήψη request data
- validation σε επίπεδο endpoint όπου χρειάζεται
- κλήση service layer
- response επιστροφή
- μετατροπή exceptions σε HTTP responses

Δεν περιέχει:
- proof of work implementation
- hash generation logic
- μεγάλα business rules
- αποθήκευση chain state

---

# BACKEND / CORE

## backend/app/core/__init__.py
Package init file.

## backend/app/core/block.py
Ορισμός της κλάσης Block και μόνο.

## backend/app/core/transaction.py
Ορισμός της κλάσης Transaction και μόνο.

## backend/app/core/blockchain.py
Η βασική λογική του blockchain:
- chain
- pending transactions
- genesis block
- proof of work
- mining
- validation
- balances

## backend/app/core/utils.py
Βοηθητικές συναρτήσεις όπως hashing ή serialization helpers.

Δεν περιέχει state του blockchain.

---

# BACKEND / SCHEMAS

## backend/app/schemas/__init__.py
Package init file.

## backend/app/schemas/transaction_schema.py
Schemas για transaction requests/responses:
- TransactionCreate
- TransactionData
- TransactionResponse

## backend/app/schemas/mine_schema.py
Schema για mining requests / mining responses.

## backend/app/schemas/balance_schema.py
Schema για balance responses.

## backend/app/schemas/block_schema.py
Schema για block serialization / response μορφή.

## backend/app/schemas/response_schema.py
Γενικά response models για:
- full blockchain response
- validation response

---

# BACKEND / SERVICES

## backend/app/services/__init__.py
Package init file.

## backend/app/services/blockchain_service.py
Ενδιάμεση πρόσβαση στο blockchain instance.

Περιέχει:
- create transaction
- mine block
- get chain
- get latest block
- get balance
- validate chain
- get pending transactions

Χρησιμοποιείται ώστε τα routes να μη χειρίζονται απευθείας όλη τη λογική.

Δεν ξαναγράφει το core logic.

---

# BACKEND / TESTS

## backend/app/tests/__init__.py
Package init file.

## backend/app/tests/test_block.py
Tests για την κλάση Block.

## backend/app/tests/test_transaction.py
Tests για την κλάση Transaction.

## backend/app/tests/test_blockchain.py
Tests για το blockchain core:
- genesis
- hashing
- mining
- validation
- balances

## backend/app/tests/test_routes.py
Tests για τα API routes.

---

# BACKEND / DATA

## backend/data/.gitkeep
Κρατά τον φάκελο data στο repository.

---

# FRONTEND

## frontend/README.md
Τοπικό README μόνο για το frontend:
- setup
- install
- run instructions
- API connection πληροφορίες

## frontend/package.json
Dependencies και scripts του frontend.

## frontend/tsconfig.json
Ρυθμίσεις TypeScript.

## frontend/vite.config.ts
Ρυθμίσεις Vite.

---

# FRONTEND / PUBLIC

## frontend/public/.gitkeep
Κρατά τον φάκελο public στο repository.

---

# FRONTEND / SRC

## frontend/src/main.tsx
Frontend entry point.

## frontend/src/App.tsx
Κεντρικό component.
Συνήθως περιέχει:
- routing setup
- layout mounting
- global providers

## frontend/src/index.css
Βασικά global styles.

---

# FRONTEND / PAGES

## frontend/src/pages/Dashboard.tsx
Κεντρική εικόνα του blockchain:
- latest block
- chain overview
- validation status
- βασικά στατιστικά

## frontend/src/pages/Transactions.tsx
Σελίδα συναλλαγών:
- form δημιουργίας
- success / error handling
- πιθανή προβολή pending transactions

## frontend/src/pages/Mine.tsx
Σελίδα mining:
- miner input
- mine action
- εμφάνιση αποτελέσματος mining

## frontend/src/pages/Balances.tsx
Σελίδα αναζήτησης balance με βάση address.

## frontend/src/pages/Chain.tsx
Σελίδα προβολής όλου του blockchain.

---

# FRONTEND / COMPONENTS

## frontend/src/components/Layout.tsx
Κοινό layout wrapper όλων των σελίδων.

## frontend/src/components/Navbar.tsx
Πλοήγηση μεταξύ των frontend pages.

## frontend/src/components/TransactionForm.tsx
Φόρμα δημιουργίας συναλλαγής.

## frontend/src/components/MinePanel.tsx
UI component για mining action.

## frontend/src/components/BalanceCard.tsx
Προβολή υπολοίπου συγκεκριμένου address.

## frontend/src/components/BlockCard.tsx
Οπτικοποίηση ενός block και των βασικών του στοιχείων.

## frontend/src/components/PendingTransactions.tsx
Προβολή συναλλαγών που περιμένουν να γίνουν mined.

---

# FRONTEND / SERVICES

## frontend/src/services/api.ts
Όλες οι HTTP κλήσεις προς το backend API.

Περιέχει functions όπως:
- getChain
- getLatestBlock
- createTransaction
- mineBlock
- getBalance
- validateChain
- getPendingTransactions

Δεν περιέχει UI rendering.

---

# FRONTEND / TYPES

## frontend/src/types/blockchain.ts
TypeScript interfaces / types για:
- block
- transaction
- API responses

---

# FRONTEND / UTILS

## frontend/src/utils/format.ts
Βοηθητικές συναρτήσεις μορφοποίησης:
- timestamps
- hashes
- ποσά
- labels