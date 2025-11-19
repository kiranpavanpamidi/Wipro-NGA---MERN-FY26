import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.log("Error loading book:", err));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> ₹{book.price}</p>

      <Link to="/home" className="btn btn-secondary mt-3">Back</Link>
    </div>
  );
}

export default BookDetails;
