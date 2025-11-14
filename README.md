# Test_backend_frontend
CAD Parts Backend (Node.js + Express)

Simple backend to manage CAD parts like pipes, valves, flanges, elbows.
Built using Node.js + Express (TypeScript style).

📦 Features

Get all parts

Get category-wise parts

Add new parts

Delete parts

Clean routes using Express Router

🛠️ How to Run This Project
1️⃣ Clone the repo
git clone <your-repo-link>
cd <project-folder>

2️⃣ Install dependencies
npm install

3️⃣ Start server

If using TypeScript:

tsc index.ts
node index.js


If using JS:

node index.js

🧪 Test with Postman
GET all parts
GET http://localhost:3008/parts

GET pipe parts
GET http://localhost:3008/parts/pipe

POST add a new part
POST http://localhost:3008/parts
Content-Type: application/json


Body:

{
  "name": "New Pipe",
  "category": "pipe",
  "material": "Steel",
  "diameter": 50
}

DELETE a part
DELETE http://localhost:3000/parts/3

📁 Folder Structure
project/
│── index.ts (or index.js)
│── routes/
│     └── parts.ts
│── package.json

✔️ Endpoint Overview
Method	Endpoint	Description
GET	/parts	Get all parts
GET	/parts/pipe	Get only pipes
POST	/parts	Add new part
DELETE	/parts/:id	Delete part by ID




Here is the results in which i demnstrated that how get , post and delete functionality is working.( BAsically the image contains only output part for which i have used Postman.

<img width="1918" height="1023" alt="image" src="https://github.com/user-attachments/assets/c272a920-8b3e-4b84-8d2f-fbdb58bacc48" />  GET Operation.
<img width="1914" height="1013" alt="image" src="https://github.com/user-attachments/assets/c2247ab9-24af-439b-bf66-4328eafda98c" /> POST Operation ( Status Code : 201 )
<img width="1912" height="1012" alt="image" src="https://github.com/user-attachments/assets/5ecc5f45-619a-4f28-9f3a-44a72e9461f5" />  DELETE Operation
<img width="1917" height="1019" alt="image" src="https://github.com/user-attachments/assets/8f21b0a2-f43b-4215-be9e-769435966709" /> GET Opearion after deletion of id=1 and updation adding of new user with userid=5 

https://github.com/user-attachments/assets/92533c46-e3ca-405f-bc00-fd015f0a4fb1



