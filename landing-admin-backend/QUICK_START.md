# 🚀 Real Trust Backend - Quick Start Guide

## ✅ Current Status

- ✅ Backend fully implemented and running on `http://localhost:5000`
- ✅ MongoDB connected successfully
- ✅ All API routes working (Projects, Clients, Contacts, Subscribers)
- ✅ Input validation enabled
- ✅ Error handling configured
- ✅ CORS configured for frontend

---

## 📋 What's Been Done

### Backend Files Structure

```
landing-admin-backend/
├── server.js                          ✅ Main server with route imports
├── package.json                       ✅ Dependencies installed
├── .env                               ✅ MongoDB URI & configuration
├── API_DOCUMENTATION.md               ✅ Complete API docs
├── Real_Trust_API.postman_collection.json  ✅ Postman collection
├── models/
│   ├── Project.js                    ✅ Project schema
│   ├── Client.js                     ✅ Client/Testimonial schema
│   ├── Contact.js                    ✅ Contact form schema
│   └── Subscriber.js                 ✅ Newsletter subscriber schema
├── routes/
│   ├── projects.js                   ✅ Project CRUD routes
│   ├── clients.js                    ✅ Client CRUD routes
│   ├── contacts.js                   ✅ Contact CRUD routes
│   └── subscribers.js                ✅ Subscriber routes
├── middleware/
│   ├── validation.js                 ✅ Express validator setup
│   └── errorHandler.js               ✅ Error handling
└── config/
    └── db.js                         ✅ MongoDB connection config
```

---

## 🏃 Running the Backend

### Step 1: Start the Server

```bash
cd landing-admin-backend
node server.js
```

**Expected Output:**

```
🚀 Server running on http://localhost:5000
📧 API Base URL: http://localhost:5000/api
🌐 Frontend URL: http://localhost:3000
✅ MongoDB connected successfully
```

### Step 2: Verify Backend is Working

Open your browser and go to:

```
http://localhost:5000/
```

You should see:

```json
{
  "status": "ok",
  "message": "Real Trust Backend Server is running",
  "timestamp": "2024-01-22T15:30:00Z"
}
```

---

## 📱 Frontend Integration

### Update Frontend API Base URL

In [client-working/client/src/main.jsx](../../client-working/client/src/main.jsx):

```javascript
// Set the API base URL for React Query
export const API_BASE_URL = "http://localhost:5000/api";
```

### Update Admin Components

The admin components can now fetch data from the backend:

```javascript
import { useQuery, useMutation } from "@tanstack/react-query";

const API_URL = "http://localhost:5000/api";

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/projects`);
      return res.json();
    },
  });
};
```

---

## 🧪 Testing with Postman

### Option 1: Import Collection (Easiest)

1. Open Postman
2. Click `Import` (top left)
3. Select `Real_Trust_API.postman_collection.json` from backend folder
4. Click Import
5. All endpoints ready to test!

### Option 2: Manual Setup

1. Create new collection: "Real Trust API"
2. Set base URL variable: `{{base_url}}` = `http://localhost:5000/api`
3. Create requests for each endpoint

### Test Sequence

1. **GET /projects** - Get all projects
2. **POST /projects** - Create a test project
3. **GET /projects/:id** - Get the created project
4. **PUT /projects/:id** - Update the project
5. **DELETE /projects/:id** - Delete the project

---

## 📊 Database Collections

### Projects Collection

```javascript
{
  name: String (required),
  description: String (required),
  image: String (required),
  location: String,
  price: Number,
  bedrooms: Number,
  bathrooms: Number,
  area: Number,
  status: "available" | "sold" | "pending" | "upcoming",
  features: [String],
  category: String,
  isActive: Boolean,
  timestamps: { createdAt, updatedAt }
}
```

### Clients Collection

```javascript
{
  name: String (required),
  role: String (required),
  testimonial: String (required),
  rating: Number (1-5, required),
  image: String,
  order: Number,
  isActive: Boolean,
  timestamps: { createdAt, updatedAt }
}
```

### Contacts Collection

```javascript
{
  name: String (required),
  email: String (required, unique),
  phone: String (required),
  message: String (required),
  status: "new" | "read" | "responded",
  timestamps: { createdAt, updatedAt }
}
```

### Subscribers Collection

```javascript
{
  email: String (required, unique),
  isActive: Boolean,
  subscribedAt: Date,
  unsubscribedAt: Date,
  timestamps: { createdAt, updatedAt }
}
```

---

## 🔌 API Endpoints Summary

### Projects

- `GET /api/projects` - List all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Clients

- `GET /api/clients` - List all clients
- `GET /api/clients/:id` - Get single client
- `POST /api/clients` - Create client
- `PUT /api/clients/:id` - Update client
- `DELETE /api/clients/:id` - Delete client

### Contacts

- `GET /api/contacts` - List all contacts
- `GET /api/contacts/:id` - Get single contact
- `POST /api/contacts` - Submit contact form
- `PUT /api/contacts/:id` - Update contact
- `DELETE /api/contacts/:id` - Delete contact

### Subscribers

- `GET /api/subscribers` - List all subscribers
- `GET /api/subscribers/:id` - Get single subscriber
- `POST /api/subscribers` - Subscribe
- `DELETE /api/subscribers/:id` - Unsubscribe

---

## 🛠️ Troubleshooting

### Issue: "MongoDB connection failed"

**Solution:**

- Check `.env` file has correct `MONGO_URI`
- Verify MongoDB Atlas whitelist includes your IP
- Test with: `mongosh "mongodb+srv://..." --password`

### Issue: "CORS error in frontend"

**Solution:**

- Ensure backend is running on port 5000
- Check `FRONTEND_URL` in `.env` matches your frontend URL
- Clear browser cache and cookies

### Issue: "Port 5000 already in use"

**Solution:**

```bash
# Find process using port 5000
netstat -ano | findstr :5000

# Kill the process
taskkill /PID <PID> /F
```

### Issue: "Validation error on POST"

**Solution:**

- Check request body has all required fields
- Verify data types (number vs string)
- Check email format is valid

---

## 📝 Example Requests

### Create a Project

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Luxury Villa",
    "description": "Beautiful villa with pool",
    "image": "https://example.com/villa.jpg",
    "location": "Downtown",
    "price": 500000,
    "bedrooms": 3,
    "bathrooms": 2,
    "area": 3500,
    "status": "available",
    "features": ["Pool", "Garage", "Garden"]
  }'
```

### Subscribe to Newsletter

```bash
curl -X POST http://localhost:5000/api/subscribers \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com"}'
```

### Submit Contact Form

```bash
curl -X POST http://localhost:5000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1-555-123-4567",
    "message": "I am interested in your properties"
  }'
```

---

## ✨ Response Format

All API responses follow this format:

### Success Response

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    /* resource data */
  },
  "count": 10
}
```

### Error Response

```json
{
  "success": false,
  "error": "Error message",
  "details": ["field error 1", "field error 2"]
}
```

---

## 📖 Full Documentation

See `API_DOCUMENTATION.md` for:

- Detailed endpoint descriptions
- Request/response examples
- Postman setup instructions
- Integration examples
- Error handling guide

---

## 🎯 Next Steps

1. ✅ Backend is ready
2. Update frontend API endpoints to use `http://localhost:5000/api`
3. Test all admin components with real backend data
4. Deploy to production when ready

---

## 📞 Common Operations

### Clear All Contacts

```bash
curl -X DELETE http://localhost:5000/api/contacts/all
```

### Get Only Active Projects

```bash
curl http://localhost:5000/api/projects?isActive=true
```

### Get Only New Contacts

```bash
curl http://localhost:5000/api/contacts?status=new
```

---

## 🔐 Environment Variables (.env)

```
PORT=5000
MONGO_URI=mongodb+srv://dipanshiyadav2005_db_user:c8sY7d7jikogZlMo@cluster0.xqs53zv.mongodb.net/?appName=Cluster0
FRONTEND_URL=http://localhost:5173
```

---

**Backend is now fully functional and ready for integration! 🎉**
