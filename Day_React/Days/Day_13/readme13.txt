Day 13: Form Handling & State Management Pattern

Title: “BookVerse: Add New Book and Manage Data Flow”

### Details
the application includes advanced concepts like Formik form handling, Yup validation, Flux state management, and Dependency Injection using React Context, fully integrated with SPA navigation.

### Futures
1. Add New Book (Formik + Yup Validation)
Title, author, price are required
Validation errors shown below fields
Form resets after submit
Supports DI

2. Flux Architecture
Dispatcher
Actions (add book, load books)
Store (BookStore)
All components receive store using useStores() hook
Automatic UI update via store subscriptions

### Project Structure
bookverse/
src/
├── App.js
├── index.js
│
├── components/
│   ├── BookList.jsx
│   ├── BookCard.jsx
│   ├── BookDetails.jsx
│   ├── AddBookForm.jsx
│   ├── AuthorInfo.jsx
│
├── pages/
│   ├── AddBook.jsx
│
└── flux/
│   ├── dispatcher.js
│   ├── actions.js
│   ├── bookStore.js
│   ├── storeContext.js



### How to run
-go to terminal with the filename
>npm install
>npm install formik yup
>npm start
- in Second terminal (to run the join file
>cd server
>npx json-server books.json --port 3001

### Data Flow
1. Add Book
>AddBookForm -> onSubmit() -> actions.addBook() -> dispatcher -> BookStore.update -> UI refresh
2.Book loading
>BookList -> fetch("/books") -> bookStore.loadBooks() -> store emits change -> UI updates



