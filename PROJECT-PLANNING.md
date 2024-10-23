
# Project Name: bj.dev (My Portfolio Website)

## Project Overview

The Developer Portfolio Website is a personal web application showcasing my skills, experience, and projects. The goal is to create a dynamic, scalable, and professional online presence to attract potential clients or employers.

## Technologies
- Frontend Framework: Nestjs with TypeScript
- Backend Framework: Hono.js
- Database: MongoDB (using Prisma ORM)
- Testing Libraries: Jest, React Testing Library
- Version Control: Git (GitHub)
- Hosting: Vercel (Frontend), Render (Backend)
- Deployment: CI/CD using GitHub Actions
- Code Styling: ESLint, Prettier
- UI Framework: TailwindCSS
  
## Key Features

1. Home Page: Introduction and a brief about yourself.
2. Projects Section: Showcases your web development projects with live demos and GitHub links.
3. About Section: Personal story, coding journey, skill set, and achievements.
4. Blog Section: Articles written on web development, coding tutorials, or personal experiences.
5. Contact Section: A form for inquiries, and social media links.
6. Admin Panel: Backend for managing projects, blog posts, and inquiries.

## Project Milestones
### 1. Phase 1: Project Setup
- Set up the repository structure using GitHub.
- Initialize a Next.js project with TypeScript and TailwindCSS for the frontend.
- Initialize a Hono.js backend with MongoDB and Prisma for data management.
- Install necessary dependencies:
- Frontend: React, Tailwind, etc.
- State Management: Zustand
- Form / Request Validation: Zod
- Backend: Prisma, JWT, MongoDB driver.
- Testing: Jest, React Testing Library.
  
**Expected Completion: 1 week**

### 1. Phase 2: Backend Development (Hono.js)
- Models: Define the MongoDB schemas for projects, blogs, and inquiries using Prisma.
- APIs: Implement RESTful API endpoints for the frontend:
  - Projects: GET, POST, PUT, DELETE
  - Blogs: GET, POST, PUT, DELETE
  - Contact: POST for submitting contact forms
- Authentication: Set up JWT-based authentication for the admin panel.
- Testing: Write unit tests for services and controllers using Jest.

**Expected Completion: 2 weeks**

### 1. Phase 3: Frontend Development (Nexjs)
- Layout: Design and implement the portfolio layout (responsive design using TailwindCSS).
- Pages:
    - Home: Display profile and introduction.
    - Projects: Showcase project cards with links to live sites and GitHub repositories.
    - Blog: Fetch all list of my blog posts from dev.to API.
    - Contact: Inquiry form submission.
- State Management: Implement state management using React Context or Zustand (if needed).
- API Integration: Fetch data from the Honoj.s backend using fetch API.
- Testing: Write unit and integration tests using Jest and React Testing Library.
    - Write unit test for all functions using Jest
    - Write test for all component using React Testing Library 

**Expected Completion: 3 weeks**

### 1. Phase 4: Admin Panel
CRUD Operations: Implement pages for creating, updating, and deleting projects.
Authentication: Secure the admin panel with JWT-based authentication.
Testing: Write tests for authenticated routes using Jest.
Expected Completion: 2 weeks


### 1. Phase 6: Deployment
- CI/CD: Set up continuous integration with GitHub Actions.
- Frontend: Deploy to Vercel.
- Backend: Deploy to Render with automatic deployment triggered by CI.


**Expected Completion: 1 week**

**Risk Management**

- Risk: API calls fail due to server downtime.
- Mitigation: Use error boundaries and toast notifications to inform users.
- Risk: Test coverage is insufficient.
- Mitigation: Incorporate tests in each development phase and use code coverage tools.