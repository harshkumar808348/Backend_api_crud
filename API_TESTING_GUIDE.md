# API Testing Guide

This guide shows you how to test all API endpoints using different methods.

## Prerequisites

1. Make sure MongoDB is running
2. Start the server: `npm start`
3. Server should be running on `http://localhost:5000`

---

## Testing Methods

### Method 1: Using Postman (Recommended)

Import the `postman_collection.json` file into Postman for easy testing.

### Method 2: Using cURL

All cURL commands are provided below.

### Method 3: Using Browser

Only GET requests can be tested directly in browser.

---

## API Endpoints Testing

### 1. Employee Endpoints

#### Create Employee
```bash
POST http://localhost:5000/api/employees
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "position": "Software Engineer",
  "department": "Engineering",
  "salary": 75000
}
```

**cURL:**
```bash
curl -X POST http://localhost:5000/api/employees \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"John Doe\",\"email\":\"john.doe@example.com\",\"position\":\"Software Engineer\",\"department\":\"Engineering\",\"salary\":75000}"
```

#### Get All Employees
```bash
GET http://localhost:5000/api/employees
```

**cURL:**
```bash
curl http://localhost:5000/api/employees
```

#### Get Employee by ID
```bash
GET http://localhost:5000/api/employees/{employee_id}
```

**cURL:**
```bash
curl http://localhost:5000/api/employees/YOUR_EMPLOYEE_ID
```

#### Update Employee
```bash
PUT http://localhost:5000/api/employees/{employee_id}
Content-Type: application/json

{
  "name": "John Doe Updated",
  "position": "Senior Software Engineer",
  "salary": 90000
}
```

**cURL:**
```bash
curl -X PUT http://localhost:5000/api/employees/YOUR_EMPLOYEE_ID \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"John Doe Updated\",\"position\":\"Senior Software Engineer\",\"salary\":90000}"
```

#### Delete Employee
```bash
DELETE http://localhost:5000/api/employees/{employee_id}
```

**cURL:**
```bash
curl -X DELETE http://localhost:5000/api/employees/YOUR_EMPLOYEE_ID
```

---

### 2. Task Endpoints

#### Create Task
```bash
POST http://localhost:5000/api/tasks
Content-Type: application/json

{
  "title": "Fix login bug",
  "description": "Users cannot login with email authentication",
  "assignedTo": "YOUR_EMPLOYEE_ID",
  "priority": "high",
  "status": "pending",
  "dueDate": "2024-12-31T23:59:59.000Z"
}
```

**cURL:**
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"Fix login bug\",\"description\":\"Users cannot login with email authentication\",\"assignedTo\":\"YOUR_EMPLOYEE_ID\",\"priority\":\"high\",\"status\":\"pending\",\"dueDate\":\"2024-12-31T23:59:59.000Z\"}"
```

#### Get All Tasks
```bash
GET http://localhost:5000/api/tasks
```

**cURL:**
```bash
curl http://localhost:5000/api/tasks
```

#### Get Task by ID
```bash
GET http://localhost:5000/api/tasks/{task_id}
```

**cURL:**
```bash
curl http://localhost:5000/api/tasks/YOUR_TASK_ID
```

#### Update Task
```bash
PUT http://localhost:5000/api/tasks/{task_id}
Content-Type: application/json

{
  "status": "in-progress",
  "priority": "high"
}
```

**cURL:**
```bash
curl -X PUT http://localhost:5000/api/tasks/YOUR_TASK_ID \
  -H "Content-Type: application/json" \
  -d "{\"status\":\"in-progress\",\"priority\":\"high\"}"
```

#### Delete Task
```bash
DELETE http://localhost:5000/api/tasks/{task_id}
```

**cURL:**
```bash
curl -X DELETE http://localhost:5000/api/tasks/YOUR_TASK_ID
```

#### Get Tasks by Employee
```bash
GET http://localhost:5000/api/tasks/employee/{employee_id}
```

**cURL:**
```bash
curl http://localhost:5000/api/tasks/employee/YOUR_EMPLOYEE_ID
```

---

## Complete Testing Flow

### Step 1: Create Employees
Create 2-3 employees first to get their IDs.

### Step 2: Get Employee IDs
Copy the `_id` from the response when you create employees.

### Step 3: Create Tasks
Use the employee IDs to create tasks assigned to them.

### Step 4: Test Relationships
- Get all tasks (should show employee details)
- Get tasks by employee ID
- Update task status to "completed"

### Step 5: Test Updates and Deletes
- Update employee information
- Update task information
- Delete tasks
- Delete employees

---

## Expected Response Formats

### Success Response
```json
{
  "success": true,
  "data": { ... }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message here"
}
```

---

## Common Test Scenarios

1. **Create employee with duplicate email** - Should return error
2. **Create task with invalid employee ID** - Should return 404
3. **Get non-existent employee** - Should return 404
4. **Update task status to completed** - Should auto-set completedAt
5. **Get tasks for employee** - Should return only that employee's tasks

---

## Quick Test Script

You can also use the `test-api.js` file to run automated tests.

