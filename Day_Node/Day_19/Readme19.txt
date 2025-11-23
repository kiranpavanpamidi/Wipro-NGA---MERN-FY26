Day 16 – Express.js CRUD API

### Details
This project is a simple Express.js CRUD API that manages a list of books.
It demonstrates core Express concepts such as:
Routes & Routers
Middleware
Query parameters
JSON request handling
Error handling
REST API structure
The API runs on http://localhost:4000
.
###Features
Add a new book (POST /books)
Get all books (GET /books)
Get a book by ID (GET /books/:id)
Update a book (PUT /books/:id)
Delete a book (DELETE /books/:id)
Status check endpoint (/status)
Query parameter example (/products?name=...)
Custom logger middleware
404 handler + global error handler

### File Structure
Day_19/
│
├── server.js     
│
├── routes/
│   └── books.js        
│
├── middleware/
│   └── logger.js          
│
└── package.json

### Execution
>npm install
>npm start
>Server running on port 4000

### try
- http://localhost:4000/
- http://localhost:4000/status
- http://localhost:4000/products?name=laptop
- http://localhost:4000/products
- http://localhost:4000/books
- http://localhost:4000/books/1
- http://localhost:4000/books/50
- http://localhost:4000/books
- http://localhost:4000/books/2
- http://localhost:4000/books/1
- http://localhost:4000/something-wrong
