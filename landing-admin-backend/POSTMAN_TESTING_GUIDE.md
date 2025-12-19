# 🧪 Postman API Testing Guide

## 📥 Step 1: Import Collection & Environment

### Import Collection

1. Open Postman
2. Click **Import** (top left)
3. Select file: `Real_Trust_API.postman_collection.json`
4. Click **Import**

### Import Environment

1. Click **Import** again
2. Select file: `Real_Trust_Local.postman_environment.json`
3. Click **Import**
4. Select **Real Trust - Local** environment from dropdown (top right)

---

## ✅ Step 2: Test the APIs

### 🏢 **Projects APIs** (5 endpoints)

#### 1. Get All Projects

- Request: `GET {{baseUrl}}/projects`
- Click **Send**
- ✅ Should return: Empty array `[]` or list of projects

#### 2. Create Project

- Request: `POST {{baseUrl}}/projects`
- Go to **Body** tab
- Sample JSON:

```json
{
  "name": "Luxury Villa",
  "description": "Beautiful 3BHK villa with modern amenities",
  "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "location": "Gurgaon, India",
  "price": 15000000,
  "bedrooms": 3,
  "bathrooms": 2,
  "area": 2500,
  "status": "available",
  "features": ["Swimming Pool", "Garden", "Parking", "24/7 Security"],
  "isActive": true
}
```

- Click **Send**
- ✅ Copy the `_id` from response

#### 3. Get Single Project

- Request: `GET {{baseUrl}}/projects/PROJECT_ID`
- Replace `PROJECT_ID` with the `_id` from step 2
- Click **Send**

#### 4. Update Project

- Request: `PUT {{baseUrl}}/projects/PROJECT_ID`
- Body:

```json
{
  "price": 16000000,
  "status": "sold"
}
```

- Click **Send**

#### 5. Delete Project

- Request: `DELETE {{baseUrl}}/projects/PROJECT_ID`
- Click **Send**
- ✅ Project deleted

---

### 👥 **Clients APIs** (5 endpoints)

#### 1. Get All Clients

- Request: `GET {{baseUrl}}/clients`

#### 2. Create Client

```json
{
  "name": "John Doe",
  "designation": "Business Owner",
  "description": "Amazing service! Found my dream home in just 2 weeks.",
  "rating": 5,
  "image": "https://randomuser.me/api/portraits/men/1.jpg",
  "isActive": true
}
```

#### 3. Get Single Client

- `GET {{baseUrl}}/clients/CLIENT_ID`

#### 4. Update Client

```json
{
  "rating": 4,
  "description": "Great service!"
}
```

#### 5. Delete Client

- `DELETE {{baseUrl}}/clients/CLIENT_ID`

---

### 📧 **Contacts APIs** (5 endpoints)

#### 1. Get All Contacts

- Request: `GET {{baseUrl}}/contacts`
- Optional filters: `?status=new` or `?status=read`

#### 2. Create Contact

```json
{
  "fullName": "Sarah Wilson",
  "email": "sarah@example.com",
  "phone": "+91 9876543210",
  "message": "I'm interested in the Luxury Villa project. Please contact me."
}
```

- ✅ Default status: `new`

#### 3. Get Single Contact

- `GET {{baseUrl}}/contacts/CONTACT_ID`

#### 4. Update Contact Status

```json
{
  "status": "read"
}
```

- Or: `"status": "responded"`

#### 5. Delete Contact

- `DELETE {{baseUrl}}/contacts/CONTACT_ID`

---

### 📰 **Subscribers APIs** (3 endpoints)

#### 1. Get All Subscribers

- Request: `GET {{baseUrl}}/subscribers`

#### 2. Create Subscriber

```json
{
  "email": "newsletter@example.com"
}
```

- ✅ Auto-generates `subscriptionDate`

#### 3. Delete Subscriber (Unsubscribe)

- `DELETE {{baseUrl}}/subscribers/SUBSCRIBER_ID`

---

## 🎯 Quick Testing Workflow

### Test All CRUD Operations (5 minutes):

1. **Create** a project → Copy `_id`
2. **Get All** projects → Verify it appears
3. **Get Single** project → Use copied `_id`
4. **Update** project → Change price/status
5. **Delete** project → Remove it

Repeat for Clients, Contacts, and Subscribers!

---

## 🔍 Common Response Formats

### Success Response

```json
{
  "success": true,
  "data": {
    /* object or array */
  },
  "message": "Operation successful"
}
```

### Error Response

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

---

## ⚡ Pro Tips

1. **Save IDs**: After creating, copy `_id` from response to test GET/PUT/DELETE
2. **Check Status Codes**:

   - `200` = Success (GET, PUT, DELETE)
   - `201` = Created (POST)
   - `400` = Validation error
   - `404` = Not found
   - `500` = Server error

3. **Test Validation**: Try sending invalid data to see error handling:

   - Missing required fields
   - Invalid email format
   - Negative numbers for price/area
   - Rating outside 1-5 range

4. **Filter Contacts**: Test `GET /contacts?status=new` to filter

---

## 📋 Testing Checklist

- [ ] Import collection & environment
- [ ] Select environment in Postman
- [ ] Backend running on port 5000
- [ ] Test Projects: CREATE → GET → UPDATE → DELETE
- [ ] Test Clients: CREATE → GET → UPDATE → DELETE
- [ ] Test Contacts: CREATE → UPDATE status → DELETE
- [ ] Test Subscribers: CREATE → GET → DELETE
- [ ] Verify MongoDB data in MongoDB Compass/Atlas

---

**All 20 endpoints ready to test!** 🚀
