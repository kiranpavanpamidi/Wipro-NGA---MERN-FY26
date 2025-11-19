import React, { useState } from "react";
import BookCard from "./BookCard";

function BookList() {
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");

  const books = [
    { title: "The Alchemist", author: "Paulo Coelho", price: 350 },
    { title: "Atomic Habits", author: "James Clear", price: 420 },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 280 },
    { title: "The Psychology of Money", author: "Morgan Housel", price: 399 },
    { title: "Ikigai", author: "Héctor García", price: 300 },
    { title: "Harry Potter and the Sorcerer’s Stone", author: "J.K. Rowling", price: 499 },
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="book-list-container">

      <h2>Featured Books</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {/*Toggle Buttons*/}
      <div className="view-buttons">
        <button onClick={() => setView("grid")}>Grid View</button>
        <button onClick={() => setView("list")}>List View</button>
      </div>

      {/* Render Books */}
      <div className={`books-wrapper ${view}`}>
        {filteredBooks.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            price={book.price}
            view={view}
          />
        ))}
      </div>
    </div>
  );
}

export default BookList;
