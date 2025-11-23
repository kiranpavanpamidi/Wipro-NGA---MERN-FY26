const express = require("express");
const router = express.Router();

let books = [
  { id: 1, title: "1984", author: "Orwell" },
  { id: 2, title: "The Alchemist", author: "Coelho" }
];

// GET all books
router.get("/", (req, res) => {
  res.json(books);
});

// GET book by id
router.get("/:id", (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });

  res.json(book);
});

// POST add book
router.post("/", (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: "Title and author required" });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update book
router.put("/:id", (req, res) => {
  const { title, author } = req.body;
  const book = books.find((b) => b.id == req.params.id);

  if (!book) return res.status(404).json({ error: "Book not found" });

  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
});

// DELETE remove book
router.delete("/:id", (req, res) => {
  books = books.filter((b) => b.id != req.params.id);
  res.json({ message: "Book deleted" });
});

module.exports = router;
