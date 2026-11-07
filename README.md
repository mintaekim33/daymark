# Daymark

**A personal productivity and organization workspace.**

Daymark is a productivity web application designed to help users organize their goals, manage projects, track daily tasks, and keep their schedules in one place.

The goal is to create a clean, intuitive workspace that makes it easier to turn long-term goals into actionable tasks, monitor progress, and stay focused on what matters.

> **Project status:** In Development

## Features

Daymark is being developed with the following features in mind:

- **Dashboard** – Get an overview of your workspace, including goals, ongoing projects, upcoming tasks, and productivity progress.
- **Goals** – Define personal or professional goals and track progress toward achieving them.
- **Projects** – Organize related tasks into projects and monitor their progress.
- **Task Management** – Create, organize, and track tasks to manage daily responsibilities.
- **Calendar** – View scheduled tasks, deadlines, and important dates in one place.
- **Settings** – Manage workspace preferences and application settings.

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

### Backend (Planned)
- Python
- FastAPI

### Development Tools
- Git and GitHub
- GitHub Codespaces

## Project Structure

The project follows a frontend/backend separation to keep the application modular and easier to maintain.

```text
daymark/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── layout/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── backend/              # Planned
│   └── app/
│       └── services/
│
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone <repository-url>
cd daymark
```

### 2. Navigate to the frontend

```bash
cd frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will start a local development server. Open the URL displayed in your terminal to view the application.

### 5. Build for production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Development Roadmap

Development is being approached incrementally, starting with the frontend before introducing backend functionality.

- [x] Initialize the frontend project
- [x] Set up React, TypeScript, and Tailwind CSS
- [x] Establish the initial application layout
- [ ] Implement responsive navigation and sidebar
- [ ] Build the dashboard interface
- [ ] Develop goals, projects, and task management pages
- [ ] Implement calendar functionality
- [ ] Develop the Python/FastAPI backend
- [ ] Integrate frontend and backend
- [ ] Implement persistent data storage
- [ ] Add testing and deployment

## Design Goals

Daymark aims to provide a productivity experience that is:

- **Simple:** Keep the interface clean and easy to navigate.
- **Organized:** Bring goals, projects, tasks, and schedules together.
- **Responsive:** Support desktop, tablet, and mobile screen sizes.
- **Maintainable:** Use a modular architecture and clear separation of concerns.
- **Scalable:** Build a foundation that can accommodate additional features over time.

## Motivation

Daymark is a personal software development project focused on building a practical productivity tool while exploring modern frontend development, backend API development, and full-stack application architecture.

Rather than building isolated features, the project aims to bring multiple aspects of personal organization into one cohesive application.

---

**Daymark — Make every day count.**