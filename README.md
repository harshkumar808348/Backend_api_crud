<div align="center">

# 🚀 Dashboard Management API

### RESTful API for User, Product & Task Management

[![Live Demo](https://img.shields.io/badge/Live%20API-Visit-success?style=for-the-badge&logo=vercel)](https://backend-api-crud.onrender.com)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18+-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-8.0+-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)

**[📖 API Documentation](#-api-endpoints)** • **[🚀 Quick Start](#-quick-start)** • **[🧪 Testing](#-testing)** • **[🌐 Live API](https://backend-api-crud.onrender.com)**

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Database Schema](#-database-schema)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Environment Variables](#-environment-variables)
- [Error Handling](#-error-handling)
- [Contributing](#-contributing)

---

## 🎯 Overview

A production-ready RESTful API built with Node.js, Express, and MongoDB for managing users, products, and tasks in a modern dashboard application. The API features comprehensive CRUD operations, data validation, relationship management, and robust error handling.

### 🌐 Live API Base URL

```
https://backend-api-crud.onrender.com/api
```

### 🎯 Key Highlights

- ✅ **Production Ready** - Deployed and running on Render
- ✅ **Full CRUD** - Complete Create, Read, Update, Delete operations
- ✅ **Data Validation** - Mongoose schema validation with custom error messages
- ✅ **Relationships** - Tasks assigned to users with automatic population
- ✅ **Query Filtering** - Advanced filtering, searching, and sorting
- ✅ **Error Handling** - Comprehensive error middleware with detailed responses
- ✅ **CORS Enabled** - Ready for frontend integration

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 👥 User Management
- Create, read, update, delete users
- Role-based user classification
- Status tracking (Active/Inactive/Away)
- Email uniqueness validation
- Auto-generated avatars

</td>
<td width="50%">

### 🛍️ Product Management
- Full product catalog CRUD
- Category-based organization
- Price range filtering
- Stock management
- Favorite & cart functionality
- Rating system

</td>
</tr>
<tr>
<td width="50%">

### ✅ Task Management
- Task CRUD with status tracking
- Priority levels (Low to Urgent)
- User assignment with population
- Due date management
- Tag system
- Completion tracking

</td>
<td width="50%">

### 🔧 Technical Features
- RESTful API design
- Mongoose data modeling
- Input validation
- Error handling middleware
- CORS support
- Timestamps on all records

</td>
</tr>
</table>

---

## 🛠 Tech Stack

<div align="center">

| Category | Technology | Version |
|----------|-----------|---------|
| **Runtime** | ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white) | 18+ |
| **Framework** | ![Express](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white) | 4.18+ |
| **Database** | ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) | 6.0+ |
| **ODM** | ![Mongoose](https://img.shields.io/badge/-Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white) | 8.0+ |
| **Environment** | dotenv | 16.3+ |
| **CORS** | cors | 2.8+ |
| **Validation** | express-validator | 7.0+ |

</div>

---

## 🏗 Architecture

### MVC Pattern

```mermaid
graph TB
    A[Client Request] --> B[Routes]
    B --> C[Controllers]
    C --> D[Models]
    D --> E[MongoDB]
    E --> D
    D --> C
    C --> F[Error Handler]
    F --> G[Client Response]
    C --> G
```

### Design Principles

- **Separation of Concerns** - Clear division between routes, controllers, and models
- **DRY (Don't Repeat Yourself)** - Reusable middleware and utilities
- **RESTful Design** - Standard HTTP methods and status codes
- **Error First** - Comprehensive error handling at every layer
- **Scalable Structure** - Easy to extend with new features

---

## 🚀 Quick Start

### Prerequisites

```bash
Node.js 18 or higher
MongoDB 6.0 or higher (local or Atlas)
npm or yarn package manager
```

### Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/dashboard-api.git
cd dashboard-api

# 2️⃣ Install dependencies
npm install

# 3️⃣ Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# 4️⃣ Start MongoDB (if using local)
mongod

# 5️⃣ Start the server
npm run dev

# ✅ Server running at http://localhost:5000
```

### Verify Installation

```bash
# Test the API
curl http://localhost:5000/api/health

# Expected response:
{
  "status": "OK",
  "message": "Dashboard API is running",
  "timestamp": "2024-11-27T10:30:00.000Z"
}
```

---

## 📁 Project Structure

```
backend/
├── 📂 config/
│   └── database.js              # MongoDB connection setup
│
├── 📂 models/
│   ├── User.js                  # User schema & model
│   ├── Product.js               # Product schema & model
│   └── Task.js                  # Task schema & model
│
├── 📂 controllers/
│   ├── userController.js        # User business logic
│   ├── productController.js     # Product business logic
│   └── taskController.js        # Task business logic
│
├── 📂 routes/
│   ├── users.js                 # User API endpoints
│   ├── products.js              # Product API endpoints
│   └── tasks.js                 # Task API endpoints
│
├── 📂 middleware/
│   └── errorHandler.js          # Global error handling
│
├── 📂 utils/
│   ├── validators.js            # Input validation helpers
│   └── helpers.js               # Utility functions
│
├── 📂 tests/
│   ├── user.test.js             # User endpoint tests
│   ├── product.test.js          # Product endpoint tests
│   └── task.test.js             # Task endpoint tests
│
├── 📄 server.js                 # Main application entry
├── 📄 .env.example              # Environment variables template
├── 📄 package.json              # Project dependencies
└── 📄 README.md                 # This file
```

---

## 📡 API Endpoints

### Base URL

**Local Development:**
```
http://localhost:5000/api
```

**Production:**
```
https://backend-api-crud.onrender.com/api
```

---

### 👥 User Endpoints

<details open>
<summary><b>View User Endpoints</b></summary>

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/users` | Get all users | No |
| `GET` | `/users/:id` | Get user by ID | No |
| `POST` | `/users` | Create new user | No |
| `PUT` | `/users/:id` | Update user | No |
| `DELETE` | `/users/:id` | Delete user | No |

#### Create User

```bash
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "role": "Developer",
  "status": "Active",
  "department": "Engineering"
}
```

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "Developer",
    "status": "Active",
    "avatar": "https://ui-avatars.com/api/?name=John+Doe",
    "createdAt": "2024-11-27T10:30:00.000Z",
    "updatedAt": "2024-11-27T10:30:00.000Z"
  }
}
```

</details>

---

### 🛍️ Product Endpoints

<details open>
<summary><b>View Product Endpoints</b></summary>

| Method | Endpoint | Description | Query Params |
|--------|----------|-------------|--------------|
| `GET` | `/products` | Get all products | `category`, `minPrice`, `maxPrice`, `search` |
| `GET` | `/products/:id` | Get product by ID | - |
| `POST` | `/products` | Create new product | - |
| `PUT` | `/products/:id` | Update product | - |
| `DELETE` | `/products/:id` | Delete product | - |
| `PATCH` | `/products/:id/favorite` | Toggle favorite | - |

#### Get Products with Filters

```bash
GET /api/products?category=Electronics&minPrice=100&maxPrice=1000&search=laptop
```

**Response:** `200 OK`
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "_id": "65a1b2c3d4e5f6g7h8i9j0k2",
      "name": "MacBook Pro",
      "description": "Powerful laptop for developers",
      "price": 999,
      "category": "Electronics",
      "stock": 15,
      "rating": 4.8,
      "isFavorite": false,
      "inCart": false
    }
  ]
}
```

#### Create Product

```bash
POST /api/products
Content-Type: application/json

{
  "name": "Wireless Mouse",
  "description": "Ergonomic wireless mouse",
  "price": 29.99,
  "category": "Electronics",
  "stock": 50,
  "rating": 4.5
}
```

</details>

---

### ✅ Task Endpoints

<details open>
<summary><b>View Task Endpoints</b></summary>

| Method | Endpoint | Description | Query Params |
|--------|----------|-------------|--------------|
| `GET` | `/tasks` | Get all tasks | `status`, `priority`, `assignedTo` |
| `GET` | `/tasks/:id` | Get task by ID | - |
| `POST` | `/tasks` | Create new task | - |
| `PUT` | `/tasks/:id` | Update task | - |
| `DELETE` | `/tasks/:id` | Delete task | - |

#### Get Tasks with Filters

```bash
GET /api/tasks?status=In Progress&priority=High
```

**Response:** `200 OK`
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "_id": "65a1b2c3d4e5f6g7h8i9j0k3",
      "title": "Fix authentication bug",
      "description": "Users cannot login with email",
      "status": "In Progress",
      "priority": "High",
      "assignedTo": {
        "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
        "name": "John Doe",
        "email": "john.doe@example.com"
      },
      "dueDate": "2024-12-31T23:59:59.000Z",
      "tags": ["bug", "urgent"],
      "completed": false,
      "createdAt": "2024-11-20T10:00:00.000Z"
    }
  ]
}
```

#### Create Task

```bash
POST /api/tasks
Content-Type: application/json

{
  "title": "Implement user dashboard",
  "description": "Create responsive dashboard with charts",
  "status": "Pending",
  "priority": "High",
  "assignedTo": "65a1b2c3d4e5f6g7h8i9j0k1",
  "dueDate": "2024-12-31T23:59:59.000Z",
  "tags": ["feature", "frontend"]
}
```

</details>

---

## 🗄️ Database Schema

### User Schema

```javascript
{
  name: String (required),
  email: String (required, unique),
  role: Enum ['Admin', 'Developer', 'Designer', 'Manager', 'User'],
  status: Enum ['Active', 'Inactive', 'Away'],
  avatar: String,
  department: String,
  joinedDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Product Schema

```javascript
{
  name: String (required),
  description: String (required),
  price: Number (required, min: 0),
  category: Enum ['Electronics', 'Clothing', 'Food', 'Books', 'Toys', 'Other'],
  stock: Number (required, min: 0),
  image: String,
  rating: Number (0-5),
  isFavorite: Boolean,
  inCart: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Task Schema

```javascript
{
  title: String (required),
  description: String (required),
  status: Enum ['Pending', 'In Progress', 'Completed', 'On Hold'],
  priority: Enum ['Low', 'Medium', 'High', 'Urgent'],
  assignedTo: ObjectId (ref: 'User'),
  dueDate: Date,
  tags: [String],
  completed: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🧪 Testing

### Method 1: Automated Test Script

```bash
# Test local server
npm test

# Test production API
BASE_URL=https://backend-api-crud.onrender.com/api npm test
```

### Method 2: cURL Commands

<details>
<summary><b>Example cURL Commands</b></summary>

```bash
# Get all users
curl -X GET http://localhost:5000/api/users

# Create user
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "role": "Designer"
  }'

# Update user
curl -X PUT http://localhost:5000/api/users/USER_ID \
  -H "Content-Type: application/json" \
  -d '{"status": "Away"}'

# Delete user
curl -X DELETE http://localhost:5000/api/users/USER_ID

# Get products with filters
curl -X GET "http://localhost:5000/api/products?category=Electronics&minPrice=50"

# Toggle favorite
curl -X PATCH http://localhost:5000/api/products/PRODUCT_ID/favorite

# Create task
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Code review",
    "description": "Review PR #123",
    "priority": "Medium",
    "assignedTo": "USER_ID"
  }'
```

</details>

### Method 3: Postman Collection

Import the provided `postman_collection.json` file into Postman for comprehensive API testing.

**Set Variables:**
- `base_url`: `http://localhost:5000` (local) or `https://backend-api-crud.onrender.com` (production)

---

## 🌐 Deployment

### Deploy to Render

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Create Render Web Service**
   - Connect your GitHub repository
   - Select Node.js environment
   - Build command: `npm install`
   - Start command: `npm start`

3. **Set Environment Variables**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dashboard_db
   NODE_ENV=production
   ```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/dashboard_db

# For MongoDB Atlas (Production)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dashboard_db?retryWrites=true&w=majority

# CORS Configuration (Optional)
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173

# API Configuration (Optional)
API_VERSION=v1
```

---

## ⚠️ Error Handling

### Standard Error Response

```json
{
  "success": false,
  "error": "Error message here"
}
```

### HTTP Status Codes

| Code | Description |
|------|-------------|
| `200` | OK - Request successful |
| `201` | Created - Resource created successfully |
| `400` | Bad Request - Invalid input data |
| `404` | Not Found - Resource not found |
| `500` | Internal Server Error - Server error |

### Error Types Handled

- **Validation Errors** - Invalid input data
- **Cast Errors** - Invalid ObjectId format
- **Duplicate Key Errors** - Unique constraint violation
- **Not Found Errors** - Resource doesn't exist

---

## 📦 Available Scripts

```bash
# Start production server
npm start

# Start development server with auto-reload
npm run dev

# Run tests
npm test

# Check for updates
npm outdated

# Update dependencies
npm update
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m '✨ Add AmazingFeature'
   ```
4. **Push to branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Commit Convention

- `✨ feat:` New feature
- `🐛 fix:` Bug fix
- `📝 docs:` Documentation changes
- `♻️ refactor:` Code refactoring
- `✅ test:` Adding tests
- `🎨 style:` Code formatting

---

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Fast, unopinionated web framework
- [MongoDB](https://www.mongodb.com/) - Document database
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling
- [Node.js](https://nodejs.org/) - JavaScript runtime

---

## 📞 Support

<div align="center">

[![GitHub Issues](https://img.shields.io/badge/Issues-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/yourusername/dashboard-api/issues)
[![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your-email@example.com)

**Need help?** Open an issue or reach out via email.

---

<div align="center">

**Built with ❤️ using Node.js, Express, and MongoDB**

[![Live API](https://img.shields.io/badge/🚀_Try_It_Now-Live_API-success?style=for-the-badge)](https://backend-api-crud.onrender.com)

</div>

---

*Last Updated: November 2025*

</div>