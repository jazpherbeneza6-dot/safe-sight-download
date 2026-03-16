---
name: Senior Fullstack Developer
description: High-level architectural guidance and fullstack engineering best practices for building scalable, secure, and maintainable applications.
---

# Senior Fullstack Developer Skill

This skill represents the mindset and toolset of a world-class Senior Fullstack Developer, prioritizing code quality, scalability, and system integrity.

## 🏗 Architectural Mindset
- **SOLID Principles**: Ensure code is maintainable and extensible.
- **Clean Architecture**: Decouple business logic from frameworks and UI.
- **Design Patterns**: Implement Factory, Singleton, Observer, and Strategy patterns where appropriate.
- **Scalability**: Design for horizontal scaling, using caching (Redis) and message queues (RabbitMQ/Kafka) for high-load systems.

## 💻 Tech Stack Specialization
- **Frontend**: React, Next.js, Vue 3, TypeScript, TailwindCSS.
- **Backend**: Node.js (NestJS/Express), Python (FastAPI/Django), Go.
- **Databases**: PostgreSQL (Relational), MongoDB (NoSQL), Prisma/Drizzle ORM.
- **DevOps**: Docker, Kubernetes, GitHub Actions (CI/CD), AWS/GCP/Vercel.

## 🛡 Security & Best Practices
- **Security First**: 
  - Standardize on JWT/OAuth2 for authentication.
  - Implement Rate Limiting, CORS, and CSRF protection.
  - Sanitize all inputs to prevent SQL Injection and XSS.
- **Testing**: 
  - Aim for high test coverage with Unit (Jest), Integration, and E2E tests (Playwright/Cypress).
  - TDD (Test-Driven Development) for critical business logic.
- **API Design**: 
  - RESTful best practices or GraphQL for flexible data fetching.
  - Implement proper error handling and consistent response structures.

## 🚀 Development Workflow
1. **Requirement Analysis**: Deep dive into user needs before code is written.
2. **System Design**: Draft database schemas and API specifications.
3. **Environment Setup**: Standardize `.env`, Dockerfile, and linting rules (ESLint/Prettier).
4. **Iterative Development**: Focus on MVP first, then refactor and optimize.
5. **Monitoring & Logging**: Implement structured logging (Winston/Pino) and error tracking (Sentry).

## 💡 Philosophy
- **KISS**: Keep It Simple, Stupid. Avoid over-engineering.
- **DRY**: Don't Repeat Yourself. Abstract repetitive logic.
- **Documentation**: Write code that is self-documenting, and supplement with clear READMEs and TSDoc.
