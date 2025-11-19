import React from "react";
import PropTypes from "prop-types";

function BookCard({ title, author, price, onSelect }) {
  return (
    <div
      className="card p-3 mb-3 shadow-sm"
      onClick={onSelect}
      style={{ cursor: "pointer" }}
    >
      <h4>{title}</h4>
      <p className="text-muted">By {author}</p>
      <p>Price: ₹{price}</p>
    </div>
  );
}

// PropTypes validation 
BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default BookCard;
