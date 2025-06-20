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
youdemi-fullstack/
├── prisma/              # Prisma schema and migration files
├── src/
│   └── server.js        # Entry point for the backend server
├── Dockerfile
├── docker-compose.yaml
├── package.json
└── .env


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