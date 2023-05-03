# Processus auth:

## Set Up NextAuth

https://next-auth.js.org/getting-started/example

### 1 - Install NextAuth

`npm install next-auth`

### 2 - Add API route

Create a file called route.ts in pages/api/auth/[...nextauth]. This contains the dynamic route handler for NextAuth.js which will also contain all of your global NextAuth.js configurations.

Generete a secret env for NextAuth (type in the terminal):
Useful in production mode.  
`openssl rand -hex 32`

### 3 - Launch project with npm run dev

(a faire + tard)
Verify is app launching in browser.
http://localhost:3000/api/auth/signin

Le formulaire d'inscription est déjà là.
Une fois les données rentrées dans le formulaire, inspecter la page.  
Sur l'onglet Network, credentials, onglet Headers, vérifier le type de la requete qui est reçu.  
Storage, onglet cookies vérifer si token nextauth récupéré.

### 4 - Get Session Data

Ne fonctionne pas, à voir plus tard

# Prisma

### 1 - Set Up Prisma

https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-mysql

`npm install prisma --save-dev`

You can now invoke the Prisma CLI by prefixing it with npx:  
`npx prisma`

Next, set up your Prisma project by creating your Prisma schema file template with the following command:  
`npx prisma init`

This command does two things:

creates a new directory called prisma that contains a file called schema.prisma, which contains the Prisma schema with your database connection variable and schema models
creates the .env file in the root directory of the project, which is used for defining environment variables (such as your database connection)

### 2 - Seeding database

https://www.prisma.io/docs/guides/migrate/seed-database#how-to-seed-your-database-in-prisma

`npm i @prisma/client`

Hash password  
`npm i bcrypt`

Inside seed.ts file, create a variable to hash password.

Configure schema.prisma file:  
https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database

`datasource db {  
  provider = "mysql"
  url      = env("DATABASE_URL")
  shadowDatabaseUrl = env("SHADOW_DATABASE_URL")
}`

`npx prisma generate`  
Add one schema at least or the command doesn't running.

`npx prisma migrate dev --name init`
Add  
`npm install -D typescript ts-node @types/node`
"prisma": {
"seed": "ts-node prisma/seed.ts"
} inside your package.json to use this command:  
 `npx prisma db seed`

Ne fonctionne pas
