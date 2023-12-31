# brewappsTest

# Project Name

Brief description or tagline for the project.

## Table of Contents

- [API Endpoints](#api-endpoints)
- [Setup Instructions](#setup-instructions)
- [Development Decisions and Assumptions](#development-decisions-and-assumptions)

## API Endpoints

#### 1.1 Create a new resource

- **Base URL**: https://localhost:8080/ OR https://brewappstest.onrender.com/
- **Description:** Endpoint to create a new resource.
- **HTTP Method:** POST
- **Endpoint:** `/api/v1/books/create`
- **Request Body:**

  ```json
  {
    "title": "value",
    "author": "value",
    "summary": "value"
  }
  ```

  #### 1.2 Get Existing data / resource

- **Base URL**: https://localhost:8080/ OR https://brewappstest.onrender.com/
- **Description:** Endpoint to get a resource.
- **HTTP Method:** GET
- **Endpoint:** `/api/v1/books/get`

#### 1.3 Update a new resource

- **Base URL**: https://localhost:8080/ OR https://brewappstest.onrender.com/
- **Description:** Endpoint to update a resource.
- **HTTP Method:** PUT
- **Endpoint:** `/api/v1/books/update/:id`
- **Request Body:**

  ```json
  {
    "title": "value",
    "author": "value",
    "summary": "value"
  }
  ```

  #### 1.3 Update a new resource

- **Base URL**: https://localhost:8080/ OR https://brewappstest.onrender.com/
- **Description:** Endpoint to delete a resource.
- **HTTP Method:** DELETE
- **Endpoint:** `/api/v1/books/delete/:id`

## Setup Instructions

Follow these steps to set up and run the Node.js application locally.

### Prerequisites

- Node.js installed (download and install from [nodejs.org](https://nodejs.org/))
- npm (Node Package Manager) installed

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-app.git
cd your-app
```

### 2. Install all dependencies

```bash
npm install or npm i
```

### 3. Setup a .env file

```PORT = 8080
    NODE_ENV = "development"
    UPLOAD_DIR = "string"
    MONGO_URL = "string"
```

### 4. Run the server

```bash
npm run dev
```
