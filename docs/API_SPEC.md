# API_SPEC.md

## Base URL
`http://127.0.0.1:8000`

---

## 1. Health Check

### GET `/`
Επιστρέφει μήνυμα ότι το API λειτουργεί.

### Response
```json
{
  "message": "Blockchain API is running."
}