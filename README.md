# 🚀 resumeIQ+
> [live demo][https://resume-iq-plus.vercel.app/]

> resumeIQ+ is an AI-powered resume analyzer that generates ATS scores, evaluates resume quality, identifies missing keywords, and provides personalized suggestions to help candidates improve their chances of landing interviews.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-blue)
![Node.js](https://img.shields.io/badge/Node.js-20-green)
![Express](https://img.shields.io/badge/Express.js-Backend-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)

---

## 📖 Overview

# Overview

**Resume Analyzer** is an AI-powered web application that helps job seekers evaluate and improve their resumes for Applicant Tracking Systems (ATS). Users can upload their resume in PDF format and receive an in-depth analysis, including an ATS compatibility score, keyword analysis, identified strengths and weaknesses, missing sections, and personalized recommendations to enhance their chances of securing interviews.

The application features a clean, intuitive interface built with React, while a Node.js and Express backend processes uploaded resumes and leverages AI to generate detailed feedback. By providing actionable insights, Resume Analyzer enables candidates to optimize their resumes for both automated screening systems and human recruiters, making the job application process more effective and efficient.


---

## ✨ Features

* 📄 **PDF Resume Upload** – Upload resumes in PDF format for instant AI-powered analysis.
* 🤖 **AI-Powered Resume Evaluation** – Analyze resume content using generative AI for comprehensive feedback.
* 📊 **ATS Compatibility Score** – Receive an overall ATS score indicating how well the resume aligns with Applicant Tracking System standards.
* 🔍 **Keyword Analysis** – Identify important keywords present and discover missing keywords relevant to the target role.
* 💪 **Strengths & Weaknesses Detection** – Get insights into the strongest aspects of the resume along with areas that need improvement.
* 🧩 **Missing Sections Identification** – Detect essential resume sections that are missing or incomplete.
* 🛠️ **Personalized Improvement Suggestions** – Receive actionable recommendations to optimize the resume for recruiters and ATS.
* 📈 **Skill Extraction** – Automatically extract and display technical and professional skills from the resume.
* 📑 **Detailed Analysis Report** – View all evaluation metrics in a clean, easy-to-understand dashboard.
* 📥 **Download Analysis Report** – Export the generated resume analysis as a PDF for future reference.



---

## 📸 Screenshots

### Home Page

<p align="center">
<img width="1297" height="646" alt="resumeiq" src="https://github.com/user-attachments/assets/41e1ecf9-3067-4a0f-8511-bf145e30c48d" />
</p>

---

## 🛠 Tech Stack

### Frontend

* React.js
* CSS3
* JavaScript (ES6+)
* Tailwind CSS
* Context API
* React Router
* Axios
* Framer Motion
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* RESTful APIs
* CORS
* Environment Variables (dotenv)


### Deployment

* Vercel
* Render
* MongoDB Atlas


### Development Tools

* VS Code
* Git
* GitHub
* Postman
* Figma

---

## 🏗 Project Structure

```
project-name/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├──.env
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Nishant7749/resumeIQ.git
```

Move into the project

```bash
cd resumeIQ
```

Install frontend dependencies

```bash
cd client
npm install
```

Install backend dependencies

```bash
cd ../server
npm install
```

---

## ▶ Running the Project

Backend

```bash
cd server
npm run dev
```

Frontend

```bash
cd client
npm run dev
```

---

## 🏗️ Application Workflow

## 🏗️ Application Workflow

```text
                    ┌──────────────┐
                    │     User     │
                    └──────┬───────┘
                           │
                           ▼
               ┌─────────────────────┐
               │   React Frontend    │
               └──────┬──────────────┘
                      │
                 Axios API
                      │
                      ▼
              ┌─────────────────────┐
              │  Node.js + Express  │
              └──────┬──────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
 ┌──────────────┐        ┌────────────────┐
 │  PDF Parser  │        │   Gemini AI    │
 └──────┬───────┘        └────────┬───────┘
        └──────────────┬──────────┘
                       │
                       ▼
           ┌──────────────────────────┐
           │     Resume Analysis      │
           └───────────┬──────────────┘
                       │
                       ▼
    ┌─────────────────────────────────────────┐
    │ ATS Score • Skills • Keywords •         │
    │ Strengths • Weaknesses • Suggestions    │
    └─────────────────┬───────────────────────┘
                      │
                      ▼
          ┌────────────────────────┐
          │ Interactive Dashboard  │
          └──────────┬─────────────┘
                     │
                     ▼
          ┌────────────────────────┐
          │ Download PDF Report    │
          └────────────────────────┘
```
---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Nishant Chaudhary**

* GitHub: https://github.com/Nishant7749
* LinkedIn: https://linkedin.com/in/nishant-chaudhary77/
* Portfolio: https://nishant-chaudhary.vercel.app
* Email: nishant7749@gmail.com

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub. It helps others discover the project and motivates future improvements.
