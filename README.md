![kwidzy-banner-full](https://github.com/Caro-L-dev/Kwidzy/assets/65663844/cf2e16cb-3058-4a3e-a644-a6f508b91ebd)


# 🎮 **What is Kwidzy ?**  

Kwidzy is a fun and playful responsive website for everyone.
It adapts to the mobile and desktop format.
The goal is to answer as many questions as possible and evaluate your general culture through many topics, all while having fun. If the player is wrong, the game stops. His score is displayed after the game is finished.  
  
_NextJs, Typescript, Tailwind, MySQL, Clever Cloud_

--


## 👶 **Getting Started**

### 🔹 Front folder:  

📀 Fetch dependencies:
```bash
npm install
``` 

⚠️ Fetch .env file on your local repository
```bash
# DATAS
NEXT_PUBLIC_CATEGORIES_URL=
NEXT_PUBLIC_CATEGORY_URL=
NEXT_PUBLIC_QUESTION_URL=
NEXT_PUBLIC_ANSWER_URL=

# AUTH0 // To authentification
AUTH0_SECRET=
AUTH0_BASE_URL=
AUTH0_ISSUER_BASE_URL=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
```  

🏃 Run the development server:
```bash
npm run dev
```

👀 Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 

--

### 🔹 Back folder:

📀 Fetch dependencies:
```bash
npm install
``` 

⚠️ Fetch .env file on your local repository
```bash
# Your Clever Cloud BDD
MYSQL_ADDON_HOST=
MYSQL_ADDON_DB=
MYSQL_ADDON_USER=
MYSQL_ADDON_PORT=
MYSQL_ADDON_PASSWORD=
MYSQL_ADDON_URI=
```  

🏃 Run the development server:
```bash
npm start
```  

--  
--  

## 🔧 **Setup project**

```bash
npx create-next-app
```

Install Tailwind CSS (v3.3.1)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwind init -p
```

Don't forget to re-start the server to display the changes! 

--
## 🚀  **What's next?**

- Setting up a reward system
- Possibility to choose your avatar
- Play sound or not
- Loader animation
- Animation on answer
- Play a random theme

### **Notes**  
Each new feature is created on a new branch from main.  
```bash
Example
feat/score-component
```

