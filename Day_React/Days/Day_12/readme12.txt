Day 12: Routing and Backend Integration

Title: “BookVerse: Welcome Page and Featured Books Section”

### Details
A simple React-based book listing application demonstrating concepts like Routing, Props, Reusable Components, Controlled Inputs, useRef, Render Props, and JSON Server integration.

### Futures
BookVerse heading
Welcome message
Search bar
Featured Books list
Navigation to Book Details page

### Project Structure
bookverse/
│── src/
│   ├── components/
│   │   ├── BookCard.js
│   │   ├── BookList.js
│   │   ├── BookDetails.js
│   │   ├── AuthorInfo.js
│   │   └── UserStatus.js
│   ├── App.js
│   └── index.js
│
└── server/
    └── books.json

### How to run
-go to terminal with the filename
>npm install
>npm start
- in Second terminal (to run the join file
>cd server
>npx json-server books.json --port 3001

