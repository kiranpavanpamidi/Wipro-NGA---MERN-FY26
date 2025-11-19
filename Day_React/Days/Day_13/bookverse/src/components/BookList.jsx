import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

import { useStores } from "../flux/storeContext";

function BookList() {
  const { bookStore } = useStores();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((res) => res.json())
      .then((data) => {
        bookStore.loadBooks(data);
        setBooks([...bookStore.getBooks()]);
      });

    bookStore.onChange(() => {
      setBooks([...bookStore.getBooks()]);
    });
  }, []);

  return (
    <div className="mt-4">
      <Link className="btn btn-primary mb-3" to="/add-book">
        Add New Book
      </Link>

      <div className="row">
        {books.map((book) => (
          <div className="col-4 mb-3" key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
