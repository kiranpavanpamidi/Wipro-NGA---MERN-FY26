import React from "react";
import { useNavigate } from "react-router-dom";
import AddBookForm from "../components/AddBookForm";
import { addBookAction } from "../flux/actions";

function AddBook() {
  const navigate = useNavigate();

  const handleAdd = (values) => {
    addBookAction(values);
    navigate("/home");
  };

  return (
    <div className="container mt-4">
      <h2>Add New Book</h2>
      <AddBookForm onSubmit={handleAdd} />
    </div>
  );
}

export default AddBook;
