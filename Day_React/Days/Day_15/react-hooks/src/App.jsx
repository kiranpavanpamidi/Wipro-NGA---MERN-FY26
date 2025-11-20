import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import ThemeToggle from "./components/ThemeToggle";
import WorkoutTracker from "./components/WorkoutTracker";
import ProductAdmin from "./components/ProductAdmin";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "dark-mode" : "light-mode"}>
      <div style={{ padding: "20px" }}>
        <h1>React Hooks & State Management</h1>

        <h2>Switch to Dark Mode</h2>
        <ThemeToggle />

        <hr />

        <h2>Workout Tracker</h2>
        <WorkoutTracker />

        <hr />

        <h2>Product Admin</h2>
        <ProductAdmin />
      </div>
    </div>
  );
}

export default App;
