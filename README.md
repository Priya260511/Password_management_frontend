Password Management System
>This repository contains the frontend implementation of the Password Management System (PMS).
>The frontend provides a user interface to interact with backend APIs and manage passwords easily.
Project Description
>The frontend is built using React and offers a user-friendly interface.
>It handles login, signup, and password management operations.
>The frontend is containerized with Docker, analyzed with SonarCloud, and integrated into CI/CD pipelines for automated build, test, and deployment.
Technologies Used
>React
>HTML,CSS,JavaScript
>Axios(API calls)
>Docker
>GitHub Actions (CI/CD)
>SonarCloud (Code Quality)
>Vercel(Deployment)
Frontend Modules
1.Components
>Login, Signup, Dashboard, Password Manager
?Form validation & error handling
2️.API Integration
>Axios connects frontend to backend APIs
>Handles CRUD operations for passwords
3️.State Management
>React state / Context API manages user session and UI updates
Docker Implementation
>Frontend is containerized for consistent deployment
>Serves production build in Docker container
Build Docker Image
>docker build -t pms-frontend .
Run Frontend Container
>docker run -p 3000:3000 pms-frontend
<img width="1920" height="1080" alt="Screenshot 2026-02-07 193838" src="https://github.com/user-attachments/assets/bd268058-4342-4d1a-bf8e-b440c2993fd7" />
SonarCloud Analysis
>SonarCloud checks frontend code quality for bugs, errors, and maintainability.
>Integrated with GitHub Actions CI pipeline, so every code push automatically scans the code.
>Helps find unused code, coding issues, and potential security problems early.
>Generates a report/dashboard showing issues to fix before deployment.
>Ensures frontend code is clean, reliable, and maintainable.
<img width="1920" height="1080" alt="Screenshot 2026-02-07 185620" src="https://github.com/user-attachments/assets/a7de8286-4ff8-4ab9-8d5f-a29e4a9d8454" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c3645367-a69b-4297-81b0-d3982e4e6838" />
DevOps & CI/CD
>GitHub Actions automates frontend build, test, SonarCloud analysis, Docker image creation, and deployment.
>CI pipeline ensures frontend is always tested, containerized, and deployed automatically.
Deployment
>Frontend deployed using Vercel.
>Connected to live backend APIs for full system functionality.
<img width="1920" height="1080" alt="Screenshot 2026-02-07 190038" src="https://github.com/user-attachments/assets/910d69d8-8afe-43e0-a388-d2c59e831e66" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/35063c4f-1d48-42c5-9462-a56377e61efa" />

Challenges & Learnings 
>Handling API integration with asynchronous calls.
>Managing state and UI updates in React.
>Learning Docker containerization for frontend.
>Integrating CI/CD pipelines for automated deployment.
>Ensuring smooth interaction with backend APIs.
