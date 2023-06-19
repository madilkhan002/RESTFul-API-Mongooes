This is a simple REST API built with Node.js, Express.js, and MongoDB for managing student information.

Installation
Clone the repository: git clone <repository-url>
Install dependencies: npm install
Configuration
Make sure you have MongoDB installed and running locally.
Update the MongoDB connection URI in index.js file to match your MongoDB configuration.
Usage
Start the server: npm start
The API will be accessible at http://localhost:3000
API Endpoints
POST /student: Create a new student. The request body should contain the student's information.
GET /student: Get all students.
GET /student/:email: Get a specific student by their email address.
DELETE /student/:email: Delete a specific student by their email address.
PUT /student/:email: Update a specific student's information by their email address.
PATCH /student/:email: Partially update a specific student's information by their email address.
Sample Request and Response
Create a new student
Request:
   POST /student
  {
    "email": "john.doe@example.com",
    "name": "John Doe",
    "courses": ["Math", "Science"],
    "CGPA": 3.8
  }
  
  Response:
  Status: 201 Created

{
  "_id": "60c1c63c8182c52f30f1ae05",
  "email": "john.doe@example.com",
  "name": "John Doe",
  "courses": ["Math", "Science"],
  "CGPA": 3.8
}

