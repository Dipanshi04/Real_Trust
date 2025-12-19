# Real Trust Real Estate Backend - Complete API Documentation

## 🚀 Server Setup & Configuration

### Prerequisites

- Node.js (v14+)
- MongoDB Atlas account
- Postman (for API testing)

### Installation & Running

```bash
# Install dependencies
npm install

# Start the server
node server.js
```

**Server runs on:** `http://localhost:5000`
**Frontend URL:** `http://localhost:5173` (Vite dev server)

---

## 📋 Base URL

```
http://localhost:5000/api
```

---

## 🏗️ API Endpoints Overview

### Projects Management

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Clients/Testimonials

- `GET /api/clients` - Get all clients
- `GET /api/clients/:id` - Get single client
- `POST /api/clients` - Create new client
- `PUT /api/clients/:id` - Update client
- `DELETE /api/clients/:id` - Delete client

### Contacts

- `GET /api/contacts` - Get all contacts
- `GET /api/contacts/:id` - Get single contact
- `POST /api/contacts` - Submit contact form
- `PUT /api/contacts/:id` - Update contact status
- `DELETE /api/contacts/:id` - Delete contact

### Subscribers

- `GET /api/subscribers` - Get all subscribers
- `GET /api/subscribers/:id` - Get single subscriber
- `POST /api/subscribers` - Subscribe to newsletter
- `DELETE /api/subscribers/:id` - Unsubscribe

---

## 📝 DETAILED API ENDPOINTS

### ⭐ PROJECTS ENDPOINTS

#### 1️⃣ GET All Projects

**Endpoint:** `GET /api/projects`

**Query Parameters (Optional):**

- `status` - Filter by status (available, sold, pending, upcoming)
- `isActive` - Filter by active status (true/false)

**Postman Setup:**

1. Create new request
2. Method: `GET`
3. URL: `http://localhost:5000/api/projects`
4. Click Send

**Example Response:**

```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Luxury Villa in Downtown",
      "description": "Beautiful 3-bedroom villa with modern amenities",
      "image": "https://example.com/villa.jpg",
      "price": 500000,
      "location": "Downtown District",
      "bedrooms": 3,
      "bathrooms": 2,
      "area": 3500,
      "status": "available",
      "features": ["Swimming Pool", "Garden", "Garage"],
      "isActive": true,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

#### 2️⃣ GET Single Project

**Endpoint:** `GET /api/projects/:id`

**Postman Setup:**

1. Method: `GET`
2. URL: `http://localhost:5000/api/projects/507f1f77bcf86cd799439011`
3. Click Send

**Example Response:**

```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Luxury Villa in Downtown",
    "description": "Beautiful 3-bedroom villa with modern amenities",
    "image": "https://example.com/villa.jpg",
    "price": 500000,
    "location": "Downtown District",
    "bedrooms": 3,
    "bathrooms": 2,
    "area": 3500,
    "status": "available",
    "features": ["Swimming Pool", "Garden", "Garage"],
    "isActive": true,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

#### 3️⃣ POST Create Project

**Endpoint:** `POST /api/projects`

**Postman Setup:**

1. Method: `POST`
2. URL: `http://localhost:5000/api/projects`
3. Go to Body tab → Select `raw` → Choose `JSON` from dropdown
4. Paste the JSON below
5. Click Send

**Request Body:**

```json
{
  "name": "Modern Apartment Complex",
  "description": "State-of-the-art apartment complex with gym and pool",
  "image": "https://example.com/apartment.jpg",
  "location": "Uptown Area",
  "price": 350000,
  "bedrooms": 2,
  "bathrooms": 2,
  "area": 2500,
  "status": "available",
  "features": ["Gym", "Swimming Pool", "Parking", "Security"],
  "category": "Residential",
  "isActive": true
}
```

**Expected Response (201 Created):**

```json
{
  "success": true,
  "message": "Project created successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Modern Apartment Complex",
    "description": "State-of-the-art apartment complex with gym and pool",
    "image": "https://example.com/apartment.jpg",
    "location": "Uptown Area",
    "price": 350000,
    "bedrooms": 2,
    "bathrooms": 2,
    "area": 2500,
    "status": "available",
    "features": ["Gym", "Swimming Pool", "Parking", "Security"],
    "category": "Residential",
    "isActive": true,
    "createdAt": "2024-01-20T14:45:00Z",
    "updatedAt": "2024-01-20T14:45:00Z"
  }
}
```

#### 4️⃣ PUT Update Project

**Endpoint:** `PUT /api/projects/:id`

**Postman Setup:**

1. Method: `PUT`
2. URL: `http://localhost:5000/api/projects/507f1f77bcf86cd799439012`
3. Body → raw → JSON
4. Paste JSON below (you can update any fields)
5. Click Send

**Request Body (Partial Update):**

```json
{
  "status": "sold",
  "price": 375000,
  "bedrooms": 3
}
```

**Expected Response:**

```json
{
  "success": true,
  "message": "Project updated successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Modern Apartment Complex",
    "description": "State-of-the-art apartment complex with gym and pool",
    "image": "https://example.com/apartment.jpg",
    "location": "Uptown Area",
    "price": 375000,
    "bedrooms": 3,
    "bathrooms": 2,
    "area": 2500,
    "status": "sold",
    "features": ["Gym", "Swimming Pool", "Parking", "Security"],
    "category": "Residential",
    "isActive": true,
    "createdAt": "2024-01-20T14:45:00Z",
    "updatedAt": "2024-01-20T15:50:00Z"
  }
}
```

#### 5️⃣ DELETE Project

**Endpoint:** `DELETE /api/projects/:id`

**Postman Setup:**

1. Method: `DELETE`
2. URL: `http://localhost:5000/api/projects/507f1f77bcf86cd799439012`
3. Click Send

**Expected Response:**

```json
{
  "success": true,
  "message": "Project deleted successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Modern Apartment Complex",
    ...
  }
}
```

---

### 👥 CLIENTS/TESTIMONIALS ENDPOINTS

#### 1️⃣ GET All Clients

**Endpoint:** `GET /api/clients`

**Query Parameters (Optional):**

- `isActive` - Filter by active status (true/false)

**Postman Setup:**

1. Method: `GET`
2. URL: `http://localhost:5000/api/clients`
3. Click Send

**Example Response:**

```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "_id": "607f1f77bcf86cd799439021",
      "name": "John Doe",
      "role": "Business Owner",
      "testimonial": "Excellent service! Found my dream home quickly.",
      "rating": 5,
      "image": "https://example.com/john.jpg",
      "order": 1,
      "isActive": true,
      "createdAt": "2024-01-10T08:00:00Z",
      "updatedAt": "2024-01-10T08:00:00Z"
    }
  ]
}
```

#### 2️⃣ GET Single Client

**Endpoint:** `GET /api/clients/:id`

**Postman Setup:**

1. Method: `GET`
2. URL: `http://localhost:5000/api/clients/607f1f77bcf86cd799439021`
3. Click Send

#### 3️⃣ POST Create Client

**Endpoint:** `POST /api/clients`

**Postman Setup:**

1. Method: `POST`
2. URL: `http://localhost:5000/api/clients`
3. Body → raw → JSON

**Request Body:**

```json
{
  "name": "Sarah Johnson",
  "role": "Real Estate Investor",
  "testimonial": "Professional team with excellent market knowledge. Highly recommended!",
  "rating": 5,
  "image": "https://example.com/sarah.jpg",
  "order": 2,
  "isActive": true
}
```

**Expected Response (201 Created):**

```json
{
  "success": true,
  "message": "Client created successfully",
  "data": {
    "_id": "607f1f77bcf86cd799439022",
    "name": "Sarah Johnson",
    "role": "Real Estate Investor",
    "testimonial": "Professional team with excellent market knowledge. Highly recommended!",
    "rating": 5,
    "image": "https://example.com/sarah.jpg",
    "order": 2,
    "isActive": true,
    "createdAt": "2024-01-21T09:15:00Z",
    "updatedAt": "2024-01-21T09:15:00Z"
  }
}
```

#### 4️⃣ PUT Update Client

**Endpoint:** `PUT /api/clients/:id`

**Postman Setup:**

1. Method: `PUT`
2. URL: `http://localhost:5000/api/clients/607f1f77bcf86cd799439022`
3. Body → raw → JSON

**Request Body:**

```json
{
  "testimonial": "Updated testimonial text",
  "rating": 4,
  "isActive": true
}
```

#### 5️⃣ DELETE Client

**Endpoint:** `DELETE /api/clients/:id`

**Postman Setup:**

1. Method: `DELETE`
2. URL: `http://localhost:5000/api/clients/607f1f77bcf86cd799439022`
3. Click Send

---

### 📧 CONTACTS ENDPOINTS

#### 1️⃣ GET All Contacts

**Endpoint:** `GET /api/contacts`

**Query Parameters (Optional):**

- `status` - Filter by status (new, read, responded)
- `limit` - Limit number of results

**Postman Setup:**

1. Method: `GET`
2. URL: `http://localhost:5000/api/contacts?status=new&limit=10`
3. Click Send

**Example Response:**

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "707f1f77bcf86cd799439031",
      "name": "Mike Smith",
      "email": "mike@example.com",
      "phone": "+1-555-123-4567",
      "message": "I'm interested in the villa on Main Street.",
      "status": "new",
      "createdAt": "2024-01-22T10:00:00Z",
      "updatedAt": "2024-01-22T10:00:00Z"
    }
  ]
}
```

#### 2️⃣ GET Single Contact

**Endpoint:** `GET /api/contacts/:id`

**Postman Setup:**

1. Method: `GET`
2. URL: `http://localhost:5000/api/contacts/707f1f77bcf86cd799439031`
3. Click Send

#### 3️⃣ POST Create Contact (Contact Form Submission)

**Endpoint:** `POST /api/contacts`

**Postman Setup:**

1. Method: `POST`
2. URL: `http://localhost:5000/api/contacts`
3. Body → raw → JSON

**Request Body:**

```json
{
  "name": "Emma Wilson",
  "email": "emma@example.com",
  "phone": "+1-555-987-6543",
  "message": "Please contact me about the apartment listing in downtown area. I'm very interested!"
}
```

**Expected Response (201 Created):**

```json
{
  "success": true,
  "message": "Contact created successfully",
  "data": {
    "_id": "707f1f77bcf86cd799439032",
    "name": "Emma Wilson",
    "email": "emma@example.com",
    "phone": "+1-555-987-6543",
    "message": "Please contact me about the apartment listing in downtown area. I'm very interested!",
    "status": "new",
    "createdAt": "2024-01-22T11:30:00Z",
    "updatedAt": "2024-01-22T11:30:00Z"
  }
}
```

#### 4️⃣ PUT Update Contact Status

**Endpoint:** `PUT /api/contacts/:id`

**Postman Setup:**

1. Method: `PUT`
2. URL: `http://localhost:5000/api/contacts/707f1f77bcf86cd799439032`
3. Body → raw → JSON

**Request Body:**

```json
{
  "status": "responded"
}
```

#### 5️⃣ DELETE Contact

**Endpoint:** `DELETE /api/contacts/:id`

**Postman Setup:**

1. Method: `DELETE`
2. URL: `http://localhost:5000/api/contacts/707f1f77bcf86cd799439032`
3. Click Send

---

### 📬 SUBSCRIBERS ENDPOINTS

#### 1️⃣ GET All Subscribers

**Endpoint:** `GET /api/subscribers`

**Query Parameters (Optional):**

- `isActive` - Filter by active status (true/false)

**Postman Setup:**

1. Method: `GET`
2. URL: `http://localhost:5000/api/subscribers`
3. Click Send

**Example Response:**

```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "_id": "807f1f77bcf86cd799439041",
      "email": "subscriber1@example.com",
      "isActive": true,
      "subscribedAt": "2024-01-15T08:00:00Z",
      "createdAt": "2024-01-15T08:00:00Z",
      "updatedAt": "2024-01-15T08:00:00Z"
    }
  ]
}
```

#### 2️⃣ GET Single Subscriber

**Endpoint:** `GET /api/subscribers/:id`

**Postman Setup:**

1. Method: `GET`
2. URL: `http://localhost:5000/api/subscribers/807f1f77bcf86cd799439041`
3. Click Send

#### 3️⃣ POST Subscribe (Add Subscriber)

**Endpoint:** `POST /api/subscribers`

**Postman Setup:**

1. Method: `POST`
2. URL: `http://localhost:5000/api/subscribers`
3. Body → raw → JSON

**Request Body:**

```json
{
  "email": "newsubscriber@example.com"
}
```

**Expected Response (201 Created):**

```json
{
  "success": true,
  "message": "Subscriber created successfully",
  "data": {
    "_id": "807f1f77bcf86cd799439042",
    "email": "newsubscriber@example.com",
    "isActive": true,
    "subscribedAt": "2024-01-22T12:00:00Z",
    "createdAt": "2024-01-22T12:00:00Z",
    "updatedAt": "2024-01-22T12:00:00Z"
  }
}
```

#### 4️⃣ DELETE Unsubscribe

**Endpoint:** `DELETE /api/subscribers/:id`

**Postman Setup:**

1. Method: `DELETE`
2. URL: `http://localhost:5000/api/subscribers/807f1f77bcf86cd799439042`
3. Click Send

---

## ⚠️ Error Responses

### Validation Error (400)

```json
{
  "success": false,
  "error": "Validation Error",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

### Not Found (404)

```json
{
  "success": false,
  "error": "Project not found"
}
```

### Duplicate Entry (409)

```json
{
  "success": false,
  "error": "Duplicate entry",
  "field": "email"
}
```

### Server Error (500)

```json
{
  "success": false,
  "error": "Internal server error"
}
```

---

## 🧪 Postman Testing Steps

### Step 1: Create Postman Collection

1. Open Postman
2. Click `+ New` → `Collection`
3. Name: "Real Trust API"
4. Click Create

### Step 2: Add Environment Variables

1. Click `Environments` (gear icon)
2. Click `+ Create New`
3. Name: "Local Development"
4. Add variables:

   - `base_url`: `http://localhost:5000/api`
   - `frontend_url`: `http://localhost:5173`

5. Click Save

### Step 3: Create Folder & Requests

1. In Collection, right-click → `Add Folder`
2. Create folders: `Projects`, `Clients`, `Contacts`, `Subscribers`
3. Add requests in each folder

**Example for Projects:**

- GET All Projects
- GET Project by ID
- POST Create Project
- PUT Update Project
- DELETE Project

### Step 4: Test Each Endpoint

1. Select the request
2. Choose environment (Local Development)
3. Modify parameters/body as needed
4. Click `Send`
5. View response

---

## 🔧 Integration with Frontend

### React Query Setup Example

```javascript
import { useQuery, useMutation } from "@tanstack/react-query";

const API_BASE_URL = "http://localhost:5000/api";

// Fetch projects
export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch(`${API_BASE_URL}/projects`);
      return res.json();
    },
  });
};

// Create project mutation
export const useCreateProject = () => {
  return useMutation({
    mutationFn: async (projectData) => {
      const res = await fetch(`${API_BASE_URL}/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectData),
      });
      return res.json();
    },
  });
};
```

---

## ✅ Verification Checklist

- [x] Server runs on port 5000
- [x] MongoDB connection successful
- [x] All 4 route files created (projects, clients, contacts, subscribers)
- [x] CRUD endpoints for all entities
- [x] Input validation with express-validator
- [x] Error handling middleware
- [x] CORS configured for frontend
- [x] Request/Response formatting standardized
- [x] Timestamps on all collections
- [x] Database indexes created

---

## 🐛 Troubleshooting

### MongoDB Connection Error

- Verify `.env` has correct `MONGO_URI`
- Check MongoDB Atlas IP whitelist includes your IP
- Ensure internet connection is active

### Port Already in Use

```bash
# Find process using port 5000
netstat -ano | findstr :5000

# Kill process (replace PID)
taskkill /PID <PID> /F
```

### CORS Issues

- Verify frontend URL in `.env` matches your dev server URL
- Check CORS middleware in server.js

### Validation Errors

- Check request body matches expected schema
- Ensure all required fields are provided
- Verify data types (number vs string)

---

## 📞 Support

For issues or questions, check the console logs on both frontend and backend for detailed error messages.
