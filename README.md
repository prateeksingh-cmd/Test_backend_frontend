# Test_backend_frontend
# CAD Parts Backend (Node.js + TypeScript)

A simple backend server for managing CAD parts like pipes, valves, flanges, and elbows.

---

## 🚀 Features

* View all CAD parts
* View category‑wise parts (pipe, valve, flange, elbow)
* Add new parts
* Delete parts by ID
* Clean folder structure with separate routing

---

## 📁 Project Structure (Short)

```
server.ts → main file
src/
 ├─ index.ts → express setup
 └─ routes/
     └─ cadparts.ts → all CAD API routes
```

---

## 🛠️ How to Run

### 1. Install packages

```
npm install
```

### 2. Compile TypeScript

```
tsc
```

### 3. Start server

```
npx ts-node src/index.ts
```

Server runs on: `http://localhost:3008`

---

## 🔗 API Endpoints (Quick Look)

* **GET** `/api/parts` → View all parts
* **GET** `/api/parts/pipe` → View pipe parts
* **POST** `/api/parts` → Add new part
* **DELETE** `/api/parts/:id` → Delete part







Here is the results in which i demnstrated that how get , post and delete functionality is working.( BAsically the image contains only output part for which i have used Postman.

<img width="1918" height="1023" alt="image" src="https://github.com/user-attachments/assets/c272a920-8b3e-4b84-8d2f-fbdb58bacc48" />  GET Operation.
<img width="1914" height="1013" alt="image" src="https://github.com/user-attachments/assets/c2247ab9-24af-439b-bf66-4328eafda98c" /> POST Operation ( Status Code : 201 )
<img width="1912" height="1012" alt="image" src="https://github.com/user-attachments/assets/5ecc5f45-619a-4f28-9f3a-44a72e9461f5" />  DELETE Operation
<img width="1917" height="1019" alt="image" src="https://github.com/user-attachments/assets/8f21b0a2-f43b-4215-be9e-769435966709" /> GET Opearion after deletion of id=1 and updation adding of new user with userid=5 

https://github.com/user-attachments/assets/92533c46-e3ca-405f-bc00-fd015f0a4fb1



