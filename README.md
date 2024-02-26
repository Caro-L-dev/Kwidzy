![kwidzy-banner-full](https://github.com/Caro-L-dev/Kwidzy/assets/65663844/fd461ca1-17cc-435e-9f69-ece3a74120ca)

# 🎮 **What is Kwidzy ?**  

Kwidzy is a fun and playful responsive website for everyone.
It adapts to the mobile and desktop format.
The goal is to answer as many questions as possible and evaluate your general culture through many topics, all while having fun. If the player is wrong, the game stops. His score is displayed after the game is finished.  
  
_NextJs, Typescript, Tailwind, NodeJs, MySQL_

--



https://github.com/Caro-L-dev/Kwidzy/assets/65663844/9b75e9df-6dd3-4995-8d9d-d101c4303874



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
## 📜 **My main documentation**
- NextJs doc: https://nextjs.org/docs
- Style with Tailwind: https://tailwindcss.com/docs/installation
- Online Database: https://www.clever-cloud.com/fr/
- Setup server with Restify: http://restify.com/docs/home/
- SQL courses: https://sql.sh/
- Authentification with Auth0: https://auth0.com/docs/quickstart/webapp/nextjs/interactive
- Check contrast ratio with WebAim: https://webaim.org/resources/contrastchecker/
- Google & Stack Overflow, my buddies

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

