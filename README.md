# Employee and Task Management API

RESTful API for managing employees and tasks with MongoDB.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/employee-task-db
```

3. Make sure MongoDB is running on your system

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Employees

- `GET /api/employees` - Get all employees
- `GET /api/employees/:id` - Get employee by ID
- `POST /api/employees` - Create new employee
- `PUT /api/employees/:id` - Update employee
- `DELETE /api/employees/:id` - Delete employee

### Tasks

- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get task by ID
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `GET /api/tasks/employee/:employeeId` - Get all tasks for an employee

## Example Requests

### Create Employee
```json
POST /api/employees
{
  "name": "John Doe",
  "email": "john@example.com",
  "position": "Software Engineer",
  "department": "Engineering",
  "salary": 75000
}
```

### Create Task
```json
POST /api/tasks
{
  "title": "Fix bug in login",
  "description": "User cannot login with email",
  "assignedTo": "employee_id_here",
  "priority": "high",
  "dueDate": "2024-12-31"
}
```

