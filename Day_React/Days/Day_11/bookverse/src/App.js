import React from "react";
import BookList from "./components/BookList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-3">BookVerse</h1>
      <BookList />
    </div>
  );
}

export default App;
