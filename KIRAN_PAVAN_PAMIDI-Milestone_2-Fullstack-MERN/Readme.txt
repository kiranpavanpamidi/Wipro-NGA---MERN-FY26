Milestone 2 – Assessment Set 1
Name: kiran pavan pamidi

### Details
A full-stack mini project built for Milestone–2 Assessment (Set-1) demonstrating React Components, Routing, Context API, Formik + Yup validation, and Express.js backend integration.

### Features
User Story 1 – Product Catalog 
React functional + class components
ProductCard & ProductList
Props & state for favorite toggle
Styled with Bootstrap cards & grid

User Story 2 – Product Details + Routing
React Router navigation
GET /products and /products/:id
Loading & error states
Smooth route transitions

User Story 3 – Add Product
Formik + Yup controlled form
POST /products
Context API global update
Form validation + Bootstrap styling

Bonus
Lazy Loading of Product Detail Page

### Folder Structure
KIRAN_PAVAN_PAMIDI-Milestone2_Fullstack-MERN/
project/
│── backend/
│   ├── server.js
│   └── products.json
│
│── src/
│   ├── components/
│   │   ├── ProductCard.js
│   │   ├── ProductList.js
│   │   ├── ProductDetail.js
│   │   └── AddProductForm.js
│   │
│   ├── context/
│   │   └── ProductContext.js
│   │
│   ├── App.js
│   ├── index.js
│   └── api.js
│
│── Screenshots/
│   ├── Homepage.jpg
│   ├── ProductForm.jpg
│   ├── ProductDetail.jpg
│   ├── AddForm.jpg
│   └── Backend.jpg
│
└── package.json

### Setup and Execution
Terminal-1 
-> cd backend
-> npm install express cors
-> node server.js
(Backend running on port 5000)

Terminal-2
-> cd project
-> npm install axios react-router-dom formik yup bootstrap react-bootstrap
-> npm start
(Local:http://localhost:3000)

### Screenshots of each page and challenges are attach to the documents (Refer to folder structure)

### Try (Add Product)
Name	        Wireless Earbuds
Price	        2499
Category	Electronics / Audio
Description	Bluetooth earbuds with noise cancellation, 8-hour battery life

Name	        Yoga Mat
Price	        1299
Category	Fitness / Lifestyle
Description	Non-slip, eco-friendly yoga mat, 6mm thickness, lightweight and portable