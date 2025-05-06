# Visit Counter 🔢

Visit Counter is a lightweight backend API service that tracks page or endpoint visits across different domains. It automatically records hits per domain and endpoint, creating new entries as needed.

---

## ✨ Features

- 📈 Increments a count every time a tracked endpoint is hit
- 🌍 Auto-detects and records new domains
- 🧠 Keeps separate counts per endpoint and domain
- 🔒 Safe to use via client-side or server-side calls

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose)
- **Other**: CORS handling, IP logging (optional), REST API

---

## 📦 Example Usage

### POST `/api/visit`
**Payload:**
```json
{
  "domain": "example.com",
  "path": "/home"
}

Response
{
  "domain": "example.com",
  "path": "/home",
  "count": 42
}
```
