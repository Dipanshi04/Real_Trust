@echo off
REM Real Trust Backend Testing Script (Windows)
REM Run this script to test all API endpoints

setlocal enabledelayedexpansion

echo ==================================================
echo Real Trust Real Estate Backend - API Testing
echo ==================================================
echo.

set API=http://localhost:5000/api

REM Test 1: Health Check
echo [1] Testing Server Health Check
curl -s http://localhost:5000/ | findstr /v "^$"
echo.

REM Test 2: Get All Projects
echo [2] Testing GET All Projects
curl -s "%API%/projects"
echo.

REM Test 3: Create a Project
echo [3] Testing POST Create Project
curl -s -X POST "%API%/projects" ^
  -H "Content-Type: application/json" ^
  -d "{\"name\": \"Test Villa\", \"description\": \"A beautiful test villa\", \"image\": \"https://example.com/villa.jpg\", \"location\": \"Downtown\", \"price\": 500000, \"bedrooms\": 3, \"bathrooms\": 2, \"area\": 3500, \"status\": \"available\", \"features\": [\"Pool\", \"Garage\", \"Garden\"], \"category\": \"Residential\", \"isActive\": true}"
echo.

REM Test 4: Get All Clients
echo [4] Testing GET All Clients
curl -s "%API%/clients"
echo.

REM Test 5: Create a Client
echo [5] Testing POST Create Client
curl -s -X POST "%API%/clients" ^
  -H "Content-Type: application/json" ^
  -d "{\"name\": \"John Doe\", \"role\": \"Business Owner\", \"testimonial\": \"Excellent service!\", \"rating\": 5, \"image\": \"https://example.com/client.jpg\", \"order\": 1, \"isActive\": true}"
echo.

REM Test 6: Get All Contacts
echo [6] Testing GET All Contacts
curl -s "%API%/contacts"
echo.

REM Test 7: Submit Contact Form
echo [7] Testing POST Submit Contact
curl -s -X POST "%API%/contacts" ^
  -H "Content-Type: application/json" ^
  -d "{\"name\": \"Emma Wilson\", \"email\": \"emma@example.com\", \"phone\": \"+1-555-987-6543\", \"message\": \"Please contact me about the apartment listing.\"}"
echo.

REM Test 8: Get All Subscribers
echo [8] Testing GET All Subscribers
curl -s "%API%/subscribers"
echo.

REM Test 9: Subscribe to Newsletter
echo [9] Testing POST Subscribe
curl -s -X POST "%API%/subscribers" ^
  -H "Content-Type: application/json" ^
  -d "{\"email\": \"subscriber@example.com\"}"
echo.

echo ==================================================
echo All Tests Completed!
echo ==================================================
echo.
echo Tips:
echo - Install jq for better JSON formatting: choco install jq
echo - Or use Postman for GUI testing: https://www.postman.com/
echo ==================================================
