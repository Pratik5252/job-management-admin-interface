# Job Management Admin Interface

A full-stack job management application built with modern web technologies. This application allows users to create, filter, and manage job postings with an intuitive admin interface.

## 🚀 Features

- **Job Creation**: Create new job postings with detailed information
- **Real-time Filtering**: Filter jobs by salary range, job type, and location
- **Responsive Design**: Modern UI built with Mantine components
- **Form Validation**: Comprehensive form validation using React Hook Form
- **Database Management**: PostgreSQL database with Prisma ORM
- **API Integration**: RESTful API with NestJS backend

## 🛠️ Tech Stack

### Frontend
- **Next.js** - React framework
- **TypeScript** - Type safety
- **Mantine** - UI component library
- **React Hook Form** - Form handling and validation
- **TanStack Query** - Data fetching and caching
- **Axios** - HTTP client

### Backend
- **NestJS** - Node.js framework
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **TypeScript** - Type safety
- **Class Validator** - DTO validation

## 📁 Project Structure

```
cybermind-assignment/
├── frontend/          # Next.js frontend application
│   ├── src/
│   │   ├── app/       # App router pages
│   │   ├── components/ # Reusable components
│   │   ├── contexts/  # React contexts
│   │   ├── hooks/     # Custom hooks
│   │   ├── lib/       # Utility functions
│   │   └── types/     # TypeScript type definitions
│   └── package.json
├── backend/           # NestJS backend application
│   ├── src/
│   │   ├── job/       # Job module (controller, service, DTOs)
│   │   └── prisma/    # Prisma service
│   ├── prisma/        # Database schema and migrations
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm package manager
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pratik5252/job-management-admin-interface.git
   cd cybermind-assignment
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   pnpm install
   
   # Install frontend dependencies
   cd ../frontend
   pnpm install
   ```

3. **Set up environment variables**
   
   Create `.env` file in the backend directory:
   ```env
   DATABASE_URL="your_postgresql_connection_string"
   PORT=3001
   ```

4. **Set up the database**
   ```bash
   cd backend
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Start the development servers**
   
   Backend:
   ```bash
   cd backend
   pnpm run start:dev
   ```
   
   Frontend (in a new terminal):
   ```bash
   cd frontend
   pnpm run dev
   ```

6. **Open the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001/api/v1

## 🎯 Usage

1. **Create Jobs**: Use the job creation form to add new job postings
2. **Filter Jobs**: Use the filter panel to search jobs by salary, type, and location
3. **View Jobs**: Browse job listings in an organized card layout
4. **Manage Data**: Jobs are automatically saved to the database

## 📝 API Endpoints

- `GET /api/v1/jobs` - Get all jobs with optional filtering
- `POST /api/v1/jobs` - Create a new job posting

## 🚀 Deployment

### Backend (Heroku)
The backend is deployed on Heroku with automatic deployments from the main branch.

### Frontend (Vercel)
The frontend is deployed on Vercel with automatic deployments from the main branch.

## 📄 License

This project is created for assignment purposes.

## 👨‍💻 Author

**Pratik5252**
- GitHub: [@Pratik5252](https://github.com/Pratik5252)