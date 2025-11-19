import React from "react";

function BookCard({ title, author, price, view }) {
  return (
    <div className={`book-card ${view}`}>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Price: ₹{price}</p>
    </div>
  );
}

export default BookCard;
