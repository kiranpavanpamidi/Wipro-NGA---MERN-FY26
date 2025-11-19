import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <Link to={`/book/${book.id}`} style={{ textDecoration: "none" }}>
      <div className="card p-3 shadow-sm">
        <h4>{book.title}</h4>
        <p>Author: {book.author}</p>
        <p>Price: ₹{book.price}</p>
      </div>
    </Link>
  );
}

export default BookCard;
