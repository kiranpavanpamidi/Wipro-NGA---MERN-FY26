import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import UserStatus from "./components/UserStatus";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-4">
        <h1>BookVerse</h1>

        <UserStatus render={(name) => <p>Welcome back, {name}!</p>} />

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
