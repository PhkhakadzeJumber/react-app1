# React Guitar Shop — Midterm Project

A React-based guitar shop web application with CI/CD pipeline, automated testing, and deployment automation.

## Tech Stack
- React.js
- GitHub Actions (CI/CD)
- Bash (IaC & deployment scripts)
- Jest + React Testing Library

## Setup & Run

### 1. Clone the repository
```bash
git clone https://github.com/PhkhakadzeJumber/react-app1.git
cd react-app1
```

### 2. Automated environment setup (Linux)
```bash
bash setup.sh
```

### 3. Run locally
```bash
npm install
npm start
```

### 4. Run tests
```bash
npm test -- --watchAll=false
```

## CI/CD Pipeline

CI triggers automatically on every push and pull request to `master` and `dev` branches — runs tests.
CD triggers on every push to `master` — builds the app.

### Workflow Diagram
```
Push/PR → GitHub Actions
              │
              ├── CI: Install → Test
              │
              └── CD: Install → Build → Upload Artifact
```

## IaC — Environment Setup
```bash
bash setup.sh
```
Installs Node.js, dependencies, runs tests, and builds the app in one command.

## Blue-Green Deployment
Blue-Green deployment maintains two identical environments (blue and green). One is live while the other receives the new deployment — once ready, traffic switches instantly. If something goes wrong, rollback reverts to the previous environment immediately.
```bash
bash blue-green.sh   # deploy to blue or green environment
bash rollback.sh     # rollback to previous environment
```

## Health Check & Monitoring
```bash
bash healthcheck.sh
```
Pings the app every 30 seconds and logs results to `healthcheck.log`.

## Screenshots

### Running App
<img width="1918" height="962" alt="devops app running" src="https://github.com/user-attachments/assets/e900c32a-c018-4834-88cc-07ebe12c49cb" />

### IaC Setup
<img width="1918" height="1018" alt="devops IaC setup" src="https://github.com/user-attachments/assets/a8cc9b8d-7b70-4734-9bed-5edd428142d5" />

### CI Pipeline
<img width="1918" height="1020" alt="devops ci" src="https://github.com/user-attachments/assets/129bd4fe-32be-48db-bf16-03476f8aaa15" />

### CD Pipeline
<img width="1918" height="1017" alt="devops cd" src="https://github.com/user-attachments/assets/740168a4-b51b-4b1b-9aad-0f3d46d2e66a" />

### CI/CD Pipeline Success
<img width="1897" height="867" alt="devops ci-cd success" src="https://github.com/user-attachments/assets/91c8cc1b-970a-4c71-bf1a-1ae195a11311" />

### Blue-Green Deployment
<img width="1918" height="1020" alt="devops blue-green" src="https://github.com/user-attachments/assets/d43076e7-3d52-4a19-a99c-fb66b3514eaa" />

### Rollback
<img width="1918" height="1017" alt="devops rollback" src="https://github.com/user-attachments/assets/a672a8ba-8c72-4477-91f6-de4ef715e2d6" />

### Health Check
<img width="1918" height="1021" alt="devops health check" src="https://github.com/user-attachments/assets/505bf017-a2da-4001-8223-35ff55aca765" />
