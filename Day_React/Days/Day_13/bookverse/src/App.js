import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookList from "./components/BookList";
import AddBook from "./pages/AddBook";

import { StoreProvider } from "./flux/storeContext";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <div className="container mt-4">
          <h2>BookVerse</h2>
          <p>Welcome back, User!</p>

          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add-book" element={<AddBook />} />
          </Routes>
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
