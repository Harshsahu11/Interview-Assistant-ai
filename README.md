# 🤖 AI Interview Preparation Platform

An **AI-powered interview preparation platform** that helps candidates prepare smarter for job interviews.

The system analyzes a candidate's **resume, job description, and self-description** and generates a **personalized interview preparation plan**, including technical questions, behavioral questions, skill gap analysis, and a structured preparation roadmap.

---

# 🚀 Features

### 🔹 AI Interview Question Generation
- Generates **technical interview questions** based on the job description.
- Generates **behavioral interview questions** tailored to the candidate profile.

### 🔹 Personalized Preparation Roadmap
- Creates a **multi-day preparation plan** with actionable tasks.

### 🔹 Match Score Analysis
- Calculates how closely the candidate’s profile matches the job requirements.

### 🔹 Skill Gap Identification
- Detects missing or weak skills that should be improved before the interview.

### 🔹 Resume Upload & Parsing
- Upload resume in **PDF or DOCX format**.
- Extract key information automatically using **pdf-parse**.

### 🔹 Downloadable Interview Report
- Generate and download a **complete interview preparation report as a PDF**.

### 🔹 Secure Authentication
- User **registration and login**.
- **Protected routes** for user-specific interview plans.

---

# 🛠 Tech Stack

## Frontend
- React.js
- React Router
- Axios
- SCSS (Sass)
- Vite

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## AI Integration
- Google Gemini API (`@google/genai`)

## Additional Tools
- JWT Authentication
- Multer (file uploads)
- pdf-parse (resume parsing)
- Puppeteer (PDF generation)
- bcrypt / bcryptjs (password hashing)
- Zod + Zod-to-JSON-Schema (AI schema validation)

---

# 🏗 Project Architecture

<img width="1841" height="880" alt="1" src="https://github.com/user-attachments/assets/755156af-ab39-4aa8-bf68-53e9731a47a7" />
<img width="1915" height="877" alt="2" src="https://github.com/user-attachments/assets/4d25dba3-9dc7-47e2-ad5b-3f8df28036f3" />
<img width="1907" height="872" alt="3" src="https://github.com/user-attachments/assets/3a721575-2e2e-40ef-83e0-cad4b66860bc" />
<img width="1885" height="875" alt="4" src="https://github.com/user-attachments/assets/d0889388-89fc-48cf-a378-b30e228e097d" />

project-root
│
├── frontend
│   ├── src
│   │   ├── features
│   │   │   ├── auth
│   │   │   └── interview
│   │   ├── hooks
│   │   ├── pages
│   │   └── styles
│   └── package.json
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── models
│   │   ├── middleware
│   │   └── services
│   └── package.json
│
└── README.md



# ⚙ How It Works

1. User uploads a **resume** or writes a **self-description**.
2. User pastes the **job description**.
3. Backend sends the data to **Gemini AI API**.
4. AI generates:
   - Technical questions
   - Behavioral questions
   - Skill gaps
   - Preparation roadmap
5. System calculates a **match score**.
6. The result is displayed in a **dashboard UI**.
7. The user can **download the report as a PDF**.

---

# 💻 Installation

## Clone the Repository


git clone https://github.com/HarshSahu11/Interview-Assistant-ai.git
cd ai-interview-prep


# 📦 Install Frontend


cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173



# 📦 Install Backend


cd backend
npm install
npm run dev


Backend runs on:

http://localhost:8000


# 🔐 Environment Variables

Create a `.env` file in the backend folder.

Example:

PORT=8000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key




# 📚 Learning Outcomes

This project helped me gain experience in:

- Building **full-stack MERN applications**
- Integrating **Generative AI APIs**
- Designing **AI-driven workflows**
- Implementing **authentication and protected routes**
- Handling **file uploads and document parsing**
- Creating **modern dashboard interfaces with React and SCSS**

---

# 🔮 Future Improvements

- AI-powered **mock interview simulation**
- **Voice-based interview practice**
- **Job recommendation system**
- User **progress tracking and analytics**

---

# 👨‍💻 Author

**Harsh Sahu**

Full Stack Developer

LinkedIn  
https://linkedin.com/in/harsh-sahu1109

GitHub  
https://github.com/harshsahu11
