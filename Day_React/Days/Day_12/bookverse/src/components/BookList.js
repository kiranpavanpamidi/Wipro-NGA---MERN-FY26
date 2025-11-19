import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import withLoader from "./withLoader";

function BookList() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log("Error fetching books:", err));
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Featured Books</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control mb-3"
      />

      {/* Books Grid */}
      <div className="row">
        {filteredBooks.map((book) => (
          <div className="col-md-4 mb-3" key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default withLoader(BookList);
