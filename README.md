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