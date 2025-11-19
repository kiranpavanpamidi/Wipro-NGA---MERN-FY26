import React, { createContext, useContext, useState } from "react";

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [books, setBooks] = useState([]);

  const bookStore = {
    loadBooks: (data) => setBooks(data),
    addBook: (newBook) => setBooks((prev) => [...prev, newBook]),
    getBooks: () => books,
  };

  return (
    <StoreContext.Provider value={{ bookStore }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStores() {
  return useContext(StoreContext);
}
