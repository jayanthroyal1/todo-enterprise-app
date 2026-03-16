# todo-enterprise-app
todo-enterprise-app

# Complete Tech Stack Used in this Project
| Layer           | Technology          | Why                      |
| --------------- | ------------------- | ------------------------ |
| Version Control | Git                 | Code history             |
| Repository      | GitHub              | Collaboration            |
| CI/CD           | GitHub Actions      | Automation               |
| Code Quality    | SonarQube           | Code smell detection     |
| Backend         | Node.js + Express   | Simple REST API          |
| Database        | MongoDB             | Flexible schema          |
| Cache           | Redis               | Fast data access         |
| Auth            | JWT                 | Stateless authentication |
| File Storage    | Cloudinary + AWS S3 | Media storage            |
| Container       | Docker              | Environment consistency  |
| Frontend        | React               | UI                       |
| State           | Redux Toolkit       | Global state             |
| Architecture    | Micro Frontend      | Scalable UI              |
| Infra           | AWS EC2             | Compute                  |
| Networking      | AWS VPC             | Security                 |
| CDN             | CloudFront          | Faster delivery          |
| Monitoring      | CloudWatch          | Logs & metrics           |
| DNS             | Route53             | Domain routing           |

# Building Order
1️⃣ Git Workflow
2️⃣ Repository Setup
3️⃣ CI/CD Pipeline
4️⃣ SonarQube Integration
5️⃣ Dockerization
6️⃣ Project Folder Architecture
7️⃣ Micro Frontend Setup
8️⃣ Redux State Management
9️⃣ File Upload System
10️⃣ Backend REST API
11️⃣ MongoDB Authentication System
12️⃣ Authorization (Role Based)
13️⃣ Redis Caching
14️⃣ GraphQL Migration
15️⃣ AWS Deployment
16️⃣ Load Balancer
17️⃣ CDN
18️⃣ Monitoring

# Git Branching methods
main → production code
develop → integration branch
feature/* → new features
bugfix/* → bug fixes
release/* → pre production
hotfix/* → production fixes

# Repo Structure
todo-enterprise-app
├── frontend
│     ├── shell-app
│     ├── todo-mf
│     ├── admin-mf
│
├── backend
│     ├── auth-service
│     ├── todo-service
│     ├── file-service
│
├── docker
├── ci-cd
├── docs
└── infra

# CI/CD Pipeline
Developer Push Code
        ↓
GitHub Action Trigger
        ↓
Install Dependencies
        ↓
Run Lint
        ↓
Run Tests
        ↓
SonarQube Scan
        ↓
Build Docker Image
        ↓
Push Image to DockerHub
        ↓
Deploy to AWS EC2

# Why SonarQube
SonarQube detects:
memory leaks
bad code patterns
duplicate code
security vulnerabilities

# Why Docker
| Without Docker      | With Docker      |
| ------------------- | ---------------- |
| Works on my machine | Works everywhere |
| Version conflicts   | Same environment |
| Manual setup        | Automated        |

## Final Architeture
                Route53
                   │
                   │
               CloudFront
                   │
                   │
           AWS Load Balancer
             /            \
            /              \
        EC2 Instance     EC2 Instance
         (Docker)         (Docker)

      ┌─────────────┐
      │ React MFE   │
      │ Node API    │
      │ Redis       │
      │ MongoDB     │
      └─────────────┘

                │
                │
            Cloudinary
                │
                │
                S3 Storage

# Professional Code Quality Setup
Developer writes code
        ↓
Prettier formats code
        ↓
ESLint checks rules
        ↓
Husky prevents bad commit
        ↓
Commitlint validates commit message
        ↓
Code pushed to GitHub
        ↓
CI/CD pipeline runs

# Installed Eslint
npm install -D eslint@9 @eslint/js@9 eslint-plugin-react globals @eslint/json @eslint/css

| Package             | Version Support |
| ------------------- | --------------- |
| eslint              | 9 stable        |
| @eslint/js          | 10 latest       |
| eslint-plugin-react | supports ≤9     |

npm install -D eslint-plugin-react-hooks eslint-plugin-jsx-a11y
These add:
React Hooks rules
Accessibility linting

After Installing we to Run eslint
npx eslint --init

Note:
"scripts": {
  "dev": "concurrently \"npm run dev --prefix backend\" \"npm run dev --prefix frontend\"",
  "lint": "npm run lint --prefix backend && npm run lint --prefix frontend"
}
and install:
npm install -D concurrently
This allows running backend + frontend with one command.
----------------------------------------------------------------------------------------------------

# current Root Folder structure
| Folder   | Purpose                    |
| -------- | -------------------------- |
| frontend | All micro frontends        |
| backend  | All backend services       |
| docker   | Container configuration    |
| infra    | AWS infrastructure scripts |
| scripts  | automation scripts         |
| docs     | documentation              |
| .github  | CI/CD pipelines            |


# backend Structure
backend
│
├── auth-service
│
├── todo-service
│
├── file-service
│
├── shared
-------------------------------------------
| Service      | Responsibility   |
| ------------ | ---------------- |
| auth-service | authentication   |
| todo-service | todo CRUD        |
| file-service | document uploads |
| shared       | shared utilities |
Ex: auth-service → 2 servers
todo-service → 10 servers
file-service → 4 servers

Request
   ↓
Route
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Database

# Frontend Structure
frontend
│
├── shell-app
│
├── todo-mf
│
├── admin-mf
│
└── shared-ui
Where Shell App
   ├── Todo App
   ├── Admin App
   └── Shared Components
Benefits:
| Benefit                | Explanation               |
| ---------------------- | ------------------------- |
| Independent deployment | deploy modules separately |
| Team scalability       | multiple teams            |
| Performance            | lazy loading              |

# Docker folder
docker
│
├── docker-compose.dev.yml
│
├── docker-compose.prod.yml
│
├── nginx
│
└── redis
Instead of manually running:

MongoDB
Redis
Backend
Frontend
One command runs everything:
docker compose up
| Benefit               | Reason               |
| --------------------- | -------------------- |
| Centralized config    | Easier maintenance   |
| Clean root project    | Organized infra      |
| Multiple environments | dev / staging / prod |


# Infra Folder
infra
│
├── aws
│
├── terraform
│
└── monitoring

# Final
todo-enterprise-app

frontend
   shell-app
   todo-mf
   admin-mf

backend
   auth-service
   todo-service
   file-service
   shared

docker
infra
docs
scripts
.github

## Arch
Developer Machine
        │
        │
   Docker Compose
        │
 ┌───────────────┐
 │ Backend API   │
 │ Node + Express│
 └───────┬───────┘
         │
         │
   ┌────────────┐
   │ MongoDB    │
   └────────────┘

   ┌────────────┐
   │ Redis      │
   └────────────┘