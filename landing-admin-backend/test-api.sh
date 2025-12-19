#!/bin/bash
# Real Trust Backend Testing Script
# Run this script to test all API endpoints with curl

echo "=================================================="
echo "Real Trust Real Estate Backend - API Testing"
echo "=================================================="
echo ""

API="http://localhost:5000/api"

# Color codes for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: Health Check
echo -e "${YELLOW}[1] Testing Server Health Check${NC}"
curl -s http://localhost:5000/ | jq '.'
echo ""

# Test 2: Get All Projects
echo -e "${YELLOW}[2] Testing GET All Projects${NC}"
curl -s "$API/projects" | jq '.'
echo ""

# Test 3: Create a Project
echo -e "${YELLOW}[3] Testing POST Create Project${NC}"
PROJECT_ID=$(curl -s -X POST "$API/projects" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Villa",
    "description": "A beautiful test villa",
    "image": "https://example.com/villa.jpg",
    "location": "Downtown",
    "price": 500000,
    "bedrooms": 3,
    "bathrooms": 2,
    "area": 3500,
    "status": "available",
    "features": ["Pool", "Garage", "Garden"],
    "category": "Residential",
    "isActive": true
  }' | jq -r '.data._id')

echo "Created Project ID: $PROJECT_ID"
echo ""

# Test 4: Get Single Project
echo -e "${YELLOW}[4] Testing GET Single Project${NC}"
curl -s "$API/projects/$PROJECT_ID" | jq '.'
echo ""

# Test 5: Update Project
echo -e "${YELLOW}[5] Testing PUT Update Project${NC}"
curl -s -X PUT "$API/projects/$PROJECT_ID" \
  -H "Content-Type: application/json" \
  -d '{
    "status": "sold",
    "price": 550000
  }' | jq '.'
echo ""

# Test 6: Get All Clients
echo -e "${YELLOW}[6] Testing GET All Clients${NC}"
curl -s "$API/clients" | jq '.'
echo ""

# Test 7: Create a Client
echo -e "${YELLOW}[7] Testing POST Create Client${NC}"
CLIENT_ID=$(curl -s -X POST "$API/clients" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "role": "Business Owner",
    "testimonial": "Excellent service! Found my dream home quickly.",
    "rating": 5,
    "image": "https://example.com/client.jpg",
    "order": 1,
    "isActive": true
  }' | jq -r '.data._id')

echo "Created Client ID: $CLIENT_ID"
echo ""

# Test 8: Get Single Client
echo -e "${YELLOW}[8] Testing GET Single Client${NC}"
curl -s "$API/clients/$CLIENT_ID" | jq '.'
echo ""

# Test 9: Get All Contacts
echo -e "${YELLOW}[9] Testing GET All Contacts${NC}"
curl -s "$API/contacts" | jq '.'
echo ""

# Test 10: Submit Contact Form
echo -e "${YELLOW}[10] Testing POST Submit Contact${NC}"
CONTACT_ID=$(curl -s -X POST "$API/contacts" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Emma Wilson",
    "email": "emma@example.com",
    "phone": "+1-555-987-6543",
    "message": "Please contact me about the apartment listing in downtown area. I am very interested!"
  }' | jq -r '.data._id')

echo "Created Contact ID: $CONTACT_ID"
echo ""

# Test 11: Get Single Contact
echo -e "${YELLOW}[11] Testing GET Single Contact${NC}"
curl -s "$API/contacts/$CONTACT_ID" | jq '.'
echo ""

# Test 12: Update Contact Status
echo -e "${YELLOW}[12] Testing PUT Update Contact Status${NC}"
curl -s -X PUT "$API/contacts/$CONTACT_ID" \
  -H "Content-Type: application/json" \
  -d '{"status": "responded"}' | jq '.'
echo ""

# Test 13: Get All Subscribers
echo -e "${YELLOW}[13] Testing GET All Subscribers${NC}"
curl -s "$API/subscribers" | jq '.'
echo ""

# Test 14: Subscribe to Newsletter
echo -e "${YELLOW}[14] Testing POST Subscribe${NC}"
SUBSCRIBER_ID=$(curl -s -X POST "$API/subscribers" \
  -H "Content-Type: application/json" \
  -d '{"email": "subscriber'$(date +%s)'@example.com"}' | jq -r '.data._id')

echo "Created Subscriber ID: $SUBSCRIBER_ID"
echo ""

# Test 15: Get Single Subscriber
echo -e "${YELLOW}[15] Testing GET Single Subscriber${NC}"
curl -s "$API/subscribers/$SUBSCRIBER_ID" | jq '.'
echo ""

# Test 16: Delete Operations (Clean up)
echo -e "${YELLOW}[16] Testing DELETE Operations${NC}"

echo "Deleting Project..."
curl -s -X DELETE "$API/projects/$PROJECT_ID" | jq '.message'

echo "Deleting Client..."
curl -s -X DELETE "$API/clients/$CLIENT_ID" | jq '.message'

echo "Deleting Contact..."
curl -s -X DELETE "$API/contacts/$CONTACT_ID" | jq '.message'

echo "Deleting Subscriber..."
curl -s -X DELETE "$API/subscribers/$SUBSCRIBER_ID" | jq '.message'

echo ""
echo "=================================================="
echo -e "${GREEN}All Tests Completed!${NC}"
echo "=================================================="
