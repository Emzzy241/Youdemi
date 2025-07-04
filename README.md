## Youdemi 
#### made my Emmanuel Mojiboye (Dynasty)
### A dockerized fullstack educational platform

## Features
🔒 JWT-based Authentication
* 🧬 Prisma ORM integration
* 🐘 PostgreSQL Database
* ⚙️ Dockerized for seamless deployment
* 🧠 Built with Express and Node.js
* 💡 Modular and extensible structure

## Project Structure
```sh
/youdemi-app
│
├── /src
│   ├── /config            → Environment config, DB config, etc.
│   ├── /controllers       → Handle request/response logic
│   ├── /routes            → API route definitions
│   ├── /services          → Business logic (no direct DB calls here)
│   ├── /repositories      → DB logic, Prisma client usage
│   ├── /middlewares       → Auth, error handlers, etc.
│   ├── /models            → Prisma schema or types/interfaces
│   ├── /utils             → Reusable helper functions
│   ├── /validators        → Joi/Yup/Zod validation for requests
│   ├── /tests             → Unit & integration tests (Jest)
│   └── /app.js            → Express app entry
│
├── prisma/schema.prisma   → Prisma schema file
├── .env                   → Environment variables
├── Dockerfile             → Docker containerization
├── docker-compose.yml     → For running DB and app locally
├── package.json
└── README.md


```

## 🛠️ Getting Started
1.  Clone the Repository
```sh
git clone https://github.com/Emzzy241/youdemi-fullstack.git
cd youdemi-fullstack

```

2. Environment Configuration
Create a .env file in the root with the following variables
```sh
DATABASE_URL=postgresql://postgres:postgres@db:5432/youdemiapp
JWT_SECRET_KEY=your_secret_key
NODE_ENV=development
PORT=5000

or rename the .env.example file to .env, and
Rename .env.example to .env, also
Add your JWT keys and database credentials

```

3. Spin it up with Docker
```sh
docker compose up --build
```

4. ⚙️ Prisma
* Apply migrations and generate the client:
```sh
npx prisma migrate dev --name init
npx prisma generate
```
* You can also run these inside the container:
```sh
docker compose exec app npx prisma migrate dev --name init
```
## 🔐 Authentication
Uses jsonwebtoken and bcryptjs to implement secure authentication flows for users.

## Scripts 

| Script     | Description
|------------|-------------------------------------|
| npm start  | Starts the server with live reload  |
| npm test   | Placeholder test script             |

	
## ✍️ Author
Emmanuel Mojiboye (Dynasty)

## 📄 License
Licensed under the ISC License.