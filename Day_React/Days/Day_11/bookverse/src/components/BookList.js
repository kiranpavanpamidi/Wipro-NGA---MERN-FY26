import React, { useState, useRef } from "react";
import BookCard from "./BookCard";
import AuthorInfo from "./AuthorInfo";

function BookList() {
  const [search, setSearch] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const searchRef = useRef();

  const books = [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 350,
      bio: "Brazilian novelist known for spiritual storytelling.",
      topBooks: ["Brida", "The Pilgrimage", "Eleven Minutes"],
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      price: 420,
      bio: "Expert on habits, decision making, and continuous improvement.",
      topBooks: ["Transform Your Habits", "The Clear Habit Journal", "1% Rule"],
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: 280,
      bio: "Entrepreneur and financial literacy advocate.",
      topBooks: ["Cashflow Quadrant", "Retire Young", "Business School"],
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 399,
      bio: "Author and partner at Collaborative Fund.",
      topBooks: ["Same as Ever", "Financial Advice Stories", "Risk & Luck"],
    },
    {
      title: "Ikigai",
      author: "Héctor García",
      price: 300,
      bio: "Spanish author known for cultural and philosophical writings.",
      topBooks: ["A Geek in Japan", "The Book of Ikigai", "A Geek in China"],
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      price: 499,
      bio: "British author, screenwriter, and film producer.",
      topBooks: ["Chamber of Secrets", "Prisoner of Azkaban", "Goblet of Fire"],
    },
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const focusSearch = () => {
    searchRef.current.focus(); 
  };

  return (
    <div className="container mt-4">

      <h2 className="mb-3">Featured Books</h2>

      {/* Search + Focus Button */}
      <div className="d-flex gap-2 mb-3">
        <input
          type="text"
          ref={searchRef}
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
        />

        <button className="btn btn-primary" onClick={focusSearch}>
          Focus Search
        </button>
      </div>

      {/* Books Grid */}
      <div className="row">
        {filteredBooks.map((book, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <BookCard
              title={book.title}
              author={book.author}
              price={book.price}
              onSelect={() =>
                setSelectedAuthor({
                  author: book.author,
                  bio: book.bio,
                  topBooks: book.topBooks,
                })
              }
            />
          </div>
        ))}
      </div>

      {/* Author Details Section */}
      {selectedAuthor && (
        <AuthorInfo
          author={selectedAuthor.author}
          bio={selectedAuthor.bio}
          topBooks={selectedAuthor.topBooks}
        />
      )}
    </div>
  );
}

export default BookList;
