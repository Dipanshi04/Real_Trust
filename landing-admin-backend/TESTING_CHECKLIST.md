# 🧪 Backend Testing Checklist

## ✅ Server Status Check

Run these tests to verify your backend is working correctly.

### 1. Health Check

**Test:** Backend is running

```bash
curl http://localhost:5000/
```

**Expected Response:**

```json
{
  "status": "ok",
  "message": "Real Trust Backend Server is running",
  "timestamp": "2024-01-22T15:30:00Z"
}
```

**Status:** ✅ PASS / ❌ FAIL

---

## 🏗️ PROJECTS ENDPOINT TESTS

### Test 1: Get All Projects

**Endpoint:** `GET http://localhost:5000/api/projects`

```bash
curl http://localhost:5000/api/projects
```

**Expected:** Array of projects or empty array
**Status:** ✅ PASS / ❌ FAIL

### Test 2: Create Project

**Endpoint:** `POST http://localhost:5000/api/projects`

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Villa",
    "description": "Test Description",
    "image": "https://example.com/test.jpg",
    "location": "Test Location",
    "price": 100000,
    "bedrooms": 2,
    "bathrooms": 1,
    "area": 2000,
    "status": "available",
    "features": ["Feature1", "Feature2"]
  }'
```

**Expected:** Project created with ID
**Record Project ID:** `_____________________`
**Status:** ✅ PASS / ❌ FAIL

### Test 3: Get Project by ID

**Endpoint:** `GET http://localhost:5000/api/projects/{id}`

```bash
curl http://localhost:5000/api/projects/{PROJECT_ID}
```

**Expected:** Single project object
**Status:** ✅ PASS / ❌ FAIL

### Test 4: Update Project

**Endpoint:** `PUT http://localhost:5000/api/projects/{id}`

```bash
curl -X PUT http://localhost:5000/api/projects/{PROJECT_ID} \
  -H "Content-Type: application/json" \
  -d '{"status": "sold", "price": 120000}'
```

**Expected:** Updated project object
**Status:** ✅ PASS / ❌ FAIL

### Test 5: Delete Project

**Endpoint:** `DELETE http://localhost:5000/api/projects/{id}`

```bash
curl -X DELETE http://localhost:5000/api/projects/{PROJECT_ID}
```

**Expected:** Deleted project object
**Status:** ✅ PASS / ❌ FAIL

---

## 👥 CLIENTS/TESTIMONIALS ENDPOINT TESTS

### Test 1: Get All Clients

**Endpoint:** `GET http://localhost:5000/api/clients`

```bash
curl http://localhost:5000/api/clients
```

**Expected:** Array of clients or empty array
**Status:** ✅ PASS / ❌ FAIL

### Test 2: Create Client

**Endpoint:** `POST http://localhost:5000/api/clients`

```bash
curl -X POST http://localhost:5000/api/clients \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Client",
    "role": "Test Role",
    "testimonial": "Great service!",
    "rating": 5,
    "image": "https://example.com/client.jpg",
    "order": 1,
    "isActive": true
  }'
```

**Expected:** Client created with ID
**Record Client ID:** `_____________________`
**Status:** ✅ PASS / ❌ FAIL

### Test 3: Get Client by ID

**Endpoint:** `GET http://localhost:5000/api/clients/{id}`

```bash
curl http://localhost:5000/api/clients/{CLIENT_ID}
```

**Expected:** Single client object
**Status:** ✅ PASS / ❌ FAIL

### Test 4: Update Client

**Endpoint:** `PUT http://localhost:5000/api/clients/{id}`

```bash
curl -X PUT http://localhost:5000/api/clients/{CLIENT_ID} \
  -H "Content-Type: application/json" \
  -d '{"rating": 4, "testimonial": "Updated testimonial"}'
```

**Expected:** Updated client object
**Status:** ✅ PASS / ❌ FAIL

### Test 5: Delete Client

**Endpoint:** `DELETE http://localhost:5000/api/clients/{id}`

```bash
curl -X DELETE http://localhost:5000/api/clients/{CLIENT_ID}
```

**Expected:** Deleted client object
**Status:** ✅ PASS / ❌ FAIL

---

## 📧 CONTACTS ENDPOINT TESTS

### Test 1: Get All Contacts

**Endpoint:** `GET http://localhost:5000/api/contacts`

```bash
curl http://localhost:5000/api/contacts
```

**Expected:** Array of contacts or empty array
**Status:** ✅ PASS / ❌ FAIL

### Test 2: Submit Contact Form

**Endpoint:** `POST http://localhost:5000/api/contacts`

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

**Expected:** Contact created with ID
**Record Contact ID:** `_____________________`
**Status:** ✅ PASS / ❌ FAIL

### Test 3: Get Contact by ID

**Endpoint:** `GET http://localhost:5000/api/contacts/{id}`

```bash
curl http://localhost:5000/api/contacts/{CONTACT_ID}
```

**Expected:** Single contact object
**Status:** ✅ PASS / ❌ FAIL

### Test 4: Update Contact Status

**Endpoint:** `PUT http://localhost:5000/api/contacts/{id}`

```bash
curl -X PUT http://localhost:5000/api/contacts/{CONTACT_ID} \
  -H "Content-Type: application/json" \
  -d '{"status": "responded"}'
```

**Expected:** Updated contact object with new status
**Status:** ✅ PASS / ❌ FAIL

### Test 5: Delete Contact

**Endpoint:** `DELETE http://localhost:5000/api/contacts/{id}`

```bash
curl -X DELETE http://localhost:5000/api/contacts/{CONTACT_ID}
```

**Expected:** Deleted contact object
**Status:** ✅ PASS / ❌ FAIL

---

## 📬 SUBSCRIBERS ENDPOINT TESTS

### Test 1: Get All Subscribers

**Endpoint:** `GET http://localhost:5000/api/subscribers`

```bash
curl http://localhost:5000/api/subscribers
```

**Expected:** Array of subscribers or empty array
**Status:** ✅ PASS / ❌ FAIL

### Test 2: Subscribe to Newsletter

**Endpoint:** `POST http://localhost:5000/api/subscribers`

```bash
curl -X POST http://localhost:5000/api/subscribers \
  -H "Content-Type: application/json" \
  -d '{"email": "subscriber@example.com"}'
```

**Expected:** Subscriber created with ID
**Record Subscriber ID:** `_____________________`
**Status:** ✅ PASS / ❌ FAIL

### Test 3: Get Subscriber by ID

**Endpoint:** `GET http://localhost:5000/api/subscribers/{id}`

```bash
curl http://localhost:5000/api/subscribers/{SUBSCRIBER_ID}
```

**Expected:** Single subscriber object
**Status:** ✅ PASS / ❌ FAIL

### Test 4: Unsubscribe

**Endpoint:** `DELETE http://localhost:5000/api/subscribers/{id}`

```bash
curl -X DELETE http://localhost:5000/api/subscribers/{SUBSCRIBER_ID}
```

**Expected:** Deleted subscriber object
**Status:** ✅ PASS / ❌ FAIL

---

## ⚠️ VALIDATION ERROR TESTS

### Test 1: Missing Required Field

**Endpoint:** `POST http://localhost:5000/api/projects`

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{"description": "No name provided"}'
```

**Expected:** 400 error with validation message
**Status:** ✅ PASS / ❌ FAIL

### Test 2: Invalid Email

**Endpoint:** `POST http://localhost:5000/api/contacts`

```bash
curl -X POST http://localhost:5000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "invalid-email",
    "phone": "123456",
    "message": "Test"
  }'
```

**Expected:** 400 error with email validation message
**Status:** ✅ PASS / ❌ FAIL

### Test 3: Duplicate Email Subscriber

**Endpoint:** `POST http://localhost:5000/api/subscribers`
First request:

```bash
curl -X POST http://localhost:5000/api/subscribers \
  -H "Content-Type: application/json" \
  -d '{"email": "duplicate@example.com"}'
```

Second request (should fail):

```bash
curl -X POST http://localhost:5000/api/subscribers \
  -H "Content-Type: application/json" \
  -d '{"email": "duplicate@example.com"}'
```

**Expected:** 409 Conflict error
**Status:** ✅ PASS / ❌ FAIL

### Test 4: Invalid ID Format

**Endpoint:** `GET http://localhost:5000/api/projects/invalid-id`

```bash
curl http://localhost:5000/api/projects/invalid-id
```

**Expected:** 400 error with invalid ID message
**Status:** ✅ PASS / ❌ FAIL

### Test 5: Not Found Error

**Endpoint:** `GET http://localhost:5000/api/projects/507f1f77bcf86cd799439999`

```bash
curl http://localhost:5000/api/projects/507f1f77bcf86cd799439999
```

**Expected:** 404 error with not found message
**Status:** ✅ PASS / ❌ FAIL

---

## 🔍 QUERY PARAMETER TESTS

### Test 1: Filter Projects by Status

**Endpoint:** `GET http://localhost:5000/api/projects?status=sold`

```bash
curl http://localhost:5000/api/projects?status=sold
```

**Expected:** Only projects with status=sold
**Status:** ✅ PASS / ❌ FAIL

### Test 2: Filter Contacts by Status

**Endpoint:** `GET http://localhost:5000/api/contacts?status=new`

```bash
curl http://localhost:5000/api/contacts?status=new
```

**Expected:** Only contacts with status=new
**Status:** ✅ PASS / ❌ FAIL

### Test 3: Limit Results

**Endpoint:** `GET http://localhost:5000/api/contacts?limit=5`

```bash
curl http://localhost:5000/api/contacts?limit=5
```

**Expected:** Maximum 5 contacts
**Status:** ✅ PASS / ❌ FAIL

### Test 4: Filter by Active Status

**Endpoint:** `GET http://localhost:5000/api/clients?isActive=true`

```bash
curl http://localhost:5000/api/clients?isActive=true
```

**Expected:** Only active clients
**Status:** ✅ PASS / ❌ FAIL

---

## 📊 PERFORMANCE TESTS

### Test 1: Bulk Data Retrieval

**Endpoint:** `GET http://localhost:5000/api/projects`
Create 50 projects, then fetch all
**Expected:** Response time < 1 second
**Response Time:** `_________ ms`
**Status:** ✅ PASS / ❌ FAIL

### Test 2: Large Object Creation

**Endpoint:** `POST http://localhost:5000/api/projects`
Create project with 100+ features
**Expected:** Success response
**Status:** ✅ PASS / ❌ FAIL

---

## 🌐 CORS TESTS

### Test 1: Preflight Request

**Endpoint:** `OPTIONS http://localhost:5000/api/projects`

```bash
curl -X OPTIONS http://localhost:5000/api/projects \
  -H "Origin: http://localhost:5173"
```

**Expected:** CORS headers present
**Status:** ✅ PASS / ❌ FAIL

### Test 2: Cross-Origin Request

Make request from `http://localhost:5173` to backend
**Expected:** Request successful (no CORS error)
**Status:** ✅ PASS / ❌ FAIL

---

## 📝 SUMMARY

### Overall Status

- Projects: ✅ / ❌
- Clients: ✅ / ❌
- Contacts: ✅ / ❌
- Subscribers: ✅ / ❌
- Validation: ✅ / ❌
- Query Filters: ✅ / ❌
- CORS: ✅ / ❌
- Performance: ✅ / ❌

### Failed Tests (if any)

1. `_________________________________`
2. `_________________________________`
3. `_________________________________`

### Next Steps

- [ ] All tests passing
- [ ] Connect frontend to backend
- [ ] Test admin components
- [ ] Prepare for deployment

---

## 🐛 Debug Tips

If tests fail, check:

1. Is server running? `node server.js`
2. Is MongoDB connected? Check console for ✅ MongoDB connected
3. Is .env file correct? Check `MONGO_URI` and `PORT`
4. Check browser console for CORS errors
5. Check terminal for validation errors
6. Verify request body format (JSON)
7. Verify URL is correct (no typos)
8. Use Postman instead of curl for easier debugging

---

**Run all tests above and mark your progress!** ✨
