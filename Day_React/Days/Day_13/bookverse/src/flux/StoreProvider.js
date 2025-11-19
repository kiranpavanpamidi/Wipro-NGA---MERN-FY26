import React, { createContext, useContext, useEffect } from "react";
import bookStore from "./bookStore";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((res) => res.json())
      .then((data) => bookStore.setInitialBooks(data))
      .catch((err) => console.log("Error loading books:", err));
  }, []);

  return (
    <StoreContext.Provider value={{ bookStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStores = () => useContext(StoreContext);
