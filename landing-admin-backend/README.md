# 🏠 Real Trust Real Estate Backend

A production-ready Node.js/Express backend for the Real Trust Real Estate landing page with full CRUD operations for properties, testimonials, contacts, and newsletter subscriptions.

## ✨ Features

- ✅ **Full CRUD Operations** for Projects, Clients, Contacts, and Subscribers
- ✅ **MongoDB Integration** with Mongoose for data persistence
- ✅ **Input Validation** using express-validator
- ✅ **Error Handling** with comprehensive error responses
- ✅ **CORS Configuration** for cross-origin frontend requests
- ✅ **RESTful API** following best practices
- ✅ **Timestamps** on all collections (createdAt, updatedAt)
- ✅ **Database Indexing** for optimized queries
- ✅ **Environment Configuration** with dotenv

## 🚀 Quick Start

### Prerequisites

- Node.js v14 or higher
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### Installation

```bash
# Clone/Navigate to the backend directory
cd landing-admin-backend

# Install dependencies
npm install

# Create .env file (if not exists)
cp .env.example .env

# Update .env with your MongoDB URI
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

# Start the server
node server.js
```

### Server will run on:

```
http://localhost:5000
API Base: http://localhost:5000/api
```

## 📁 Project Structure

```
landing-admin-backend/
├── server.js                           # Main server file
├── package.json                        # Dependencies
├── .env                                # Environment variables
├── .env.example                        # Environment template
├── models/                             # MongoDB schemas
│   ├── Project.js                     # Property listing schema
│   ├── Client.js                      # Client testimonial schema
│   ├── Contact.js                     # Contact form schema
│   └── Subscriber.js                  # Newsletter subscriber schema
├── routes/                             # API route handlers
│   ├── projects.js                    # Project CRUD endpoints
│   ├── clients.js                     # Client CRUD endpoints
│   ├── contacts.js                    # Contact CRUD endpoints
│   └── subscribers.js                 # Subscriber CRUD endpoints
├── middleware/                         # Custom middleware
│   ├── validation.js                  # Input validation rules
│   └── errorHandler.js                # Error handling middleware
├── config/                             # Configuration files
│   └── db.js                          # Database connection
├── API_DOCUMENTATION.md               # Complete API docs
├── QUICK_START.md                     # Quick start guide
├── TESTING_CHECKLIST.md              # Testing procedures
└── Real_Trust_API.postman_collection.json  # Postman collection
```

## 🔌 API Endpoints

### Projects Management

```
GET    /api/projects              # Get all projects
GET    /api/projects/:id          # Get single project
POST   /api/projects              # Create new project
PUT    /api/projects/:id          # Update project
DELETE /api/projects/:id          # Delete project
```

### Clients/Testimonials

```
GET    /api/clients               # Get all clients
GET    /api/clients/:id           # Get single client
POST   /api/clients               # Create new client
PUT    /api/clients/:id           # Update client
DELETE /api/clients/:id           # Delete client
```

### Contacts

```
GET    /api/contacts              # Get all contacts
GET    /api/contacts/:id          # Get single contact
POST   /api/contacts              # Submit contact form
PUT    /api/contacts/:id          # Update contact status
DELETE /api/contacts/:id          # Delete contact
```

### Subscribers

```
GET    /api/subscribers           # Get all subscribers
GET    /api/subscribers/:id       # Get single subscriber
POST   /api/subscribers           # Subscribe to newsletter
DELETE /api/subscribers/:id       # Unsubscribe
```

## 📊 Database Schemas

### Project

```javascript
{
  name: String,                    // Required
  description: String,             // Required
  image: String,                   // Required (URL)
  location: String,
  price: Number,
  bedrooms: Number,
  bathrooms: Number,
  area: Number,                    // Square feet
  status: String,                  // available | sold | pending | upcoming
  features: [String],
  category: String,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Client

```javascript
{
  name: String,                    // Required
  role: String,                    // Required
  testimonial: String,             // Required
  rating: Number,                  // 1-5, Required
  image: String,                   // Required (URL)
  order: Number,                   // Display order
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Contact

```javascript
{
  name: String,                    // Required
  email: String,                   // Required, Unique
  phone: String,                   // Required
  message: String,                 // Required
  status: String,                  // new | read | responded
  createdAt: Date,
  updatedAt: Date
}
```

### Subscriber

```javascript
{
  email: String,                   // Required, Unique
  isActive: Boolean,
  subscribedAt: Date,
  unsubscribedAt: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## 🧪 Testing

### Using Postman

1. Import `Real_Trust_API.postman_collection.json` into Postman
2. Set `base_url` variable to `http://localhost:5000/api`
3. Test all endpoints

### Using cURL

```bash
# Get all projects
curl http://localhost:5000/api/projects

# Create a project
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Luxury Villa",
    "description": "Beautiful villa",
    "image": "https://example.com/villa.jpg",
    "location": "Downtown",
    "price": 500000,
    "bedrooms": 3,
    "bathrooms": 2,
    "area": 3500,
    "status": "available",
    "features": ["Pool", "Garage"]
  }'
```

See [TESTING_CHECKLIST.md](./TESTING_CHECKLIST.md) for comprehensive testing guide.

## 🔗 Frontend Integration

### React Query Example

```javascript
import { useQuery, useMutation } from "@tanstack/react-query";

const API_URL = "http://localhost:5000/api";

// Fetch projects
export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/projects`);
      return res.json();
    },
  });
};

// Create project
export const useCreateProject = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await fetch(`${API_URL}/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return res.json();
    },
  });
};
```

## ⚙️ Configuration

### Environment Variables (.env)

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

### CORS Settings

- Allow origin: Frontend URL (configurable)
- Allow methods: GET, POST, PUT, DELETE
- Allow headers: Content-Type, Authorization

## 📝 Response Format

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

## 🛡️ Error Handling

The API handles the following error scenarios:

- **400 Bad Request** - Validation errors or malformed request
- **404 Not Found** - Resource not found
- **409 Conflict** - Duplicate entry (email already subscribed)
- **500 Internal Server Error** - Server-side errors

## 🔐 Security Features

- ✅ Input validation on all endpoints
- ✅ Unique email constraints for contacts and subscribers
- ✅ Database indexing for query optimization
- ✅ Error messages sanitized (no internal details exposed)
- ✅ CORS configured to prevent unauthorized access
- ✅ Request size limits set

## 📚 Documentation

- [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) - Complete API reference with examples
- [QUICK_START.md](./QUICK_START.md) - Quick start guide
- [TESTING_CHECKLIST.md](./TESTING_CHECKLIST.md) - Testing procedures and verification

## 🚨 Troubleshooting

### MongoDB Connection Failed

```
Error: MongoDB connection error

Solution:
1. Check MONGO_URI in .env
2. Verify MongoDB Atlas whitelist includes your IP
3. Ensure MongoDB Atlas network access is enabled
```

### CORS Error

```
Error: Access to XMLHttpRequest blocked by CORS policy

Solution:
1. Verify FRONTEND_URL in .env matches your frontend URL
2. Ensure backend is running on port 5000
3. Clear browser cache
```

### Port Already in Use

```bash
# Find process on port 5000
netstat -ano | findstr :5000

# Kill process
taskkill /PID <PID> /F
```

### Validation Errors

- Ensure all required fields are provided
- Check data types (number vs string)
- Verify email format is valid
- Confirm length limits are met

## 📊 Performance Considerations

- Database indexes on frequently queried fields
- Lean queries for read operations
- Pagination support via limit parameter
- Connection pooling with MongoDB
- Error handling prevents server crashes

## 🔄 Data Flow

```
Client (React)
    ↓
Fetch API / React Query
    ↓
Express Server (Port 5000)
    ↓
Validation Middleware
    ↓
Route Handlers
    ↓
MongoDB (Atlas)
    ↓
Response (JSON)
    ↓
Client (Updated UI)
```

## 📦 Dependencies

```json
{
  "cors": "^2.8.5",
  "dotenv": "^17.2.3",
  "express": "^5.2.1",
  "express-validator": "^7.0.0",
  "mongoose": "^9.0.2"
}
```

## 🚀 Deployment

### Heroku

```bash
heroku login
heroku create your-app-name
git push heroku main
```

### Environment Variables for Production

```env
MONGO_URI=<production-mongodb-uri>
FRONTEND_URL=<production-frontend-url>
NODE_ENV=production
```

## 📞 Support

For issues or questions:

1. Check error logs in terminal
2. Verify `.env` configuration
3. Consult [TESTING_CHECKLIST.md](./TESTING_CHECKLIST.md)
4. Review [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)

## 📄 License

ISC

---

**Built with ❤️ for Real Trust Real Estate**

Last Updated: January 2024
