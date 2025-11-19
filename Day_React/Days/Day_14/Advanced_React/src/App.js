import React, { useState, lazy, Suspense } from "react";
import Dashboard from "./components/Dashboard";
import StatsCard from "./components/StatsCard";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";
import BrokenProductCard from "./components/BrokenProductCard";
import Modal from "./components/Modal";

// lazy loading
const CourseDetails = lazy(() => import("./components/CourseDetails"));
const InstructorProfile = lazy(() => import("./components/InstructorProfile"));

function App() {
  const [showCourse, setShowCourse] = useState(false);
  const [showInstructor, setShowInstructor] = useState(false);
  const [stats, setStats] = useState([
    { title: "Users", value: 1200, lastUpdated: "10:00 AM" },
    { title: "Sales", value: 540, lastUpdated: "10:05 AM" },
  ]);
  const [showModal, setShowModal] = useState(false);

  const updateSecondCard = () => {
    setStats((prev) => [
      prev[0],
      { ...prev[1], value: prev[1].value + 1 },
    ]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Advanced Concepts</h1>

      <hr />

      {/* Challenge 1: Lazy Loading */}
      <h2>1. Lazy Loading</h2>
      <button onClick={() => setShowCourse(!showCourse)}>
        View Course Details
      </button>

      {showCourse && (
        <Suspense fallback={<Loader />}>
          <CourseDetails />
        </Suspense>
      )}

      <br />
      <button onClick={() => setShowInstructor(!showInstructor)}>
        View Instructor Profile
      </button>

      {showInstructor && (
        <Suspense fallback={<Loader />}>
          <InstructorProfile />
        </Suspense>
      )}

      <hr />

      {/* Challenge 2: Pure Component */}
      <h2>2. Pure Components</h2>
      <Dashboard stats={stats} />

      <button onClick={updateSecondCard}>
        Simulate Update (Only 2nd card should re-render)
      </button>

      <hr />

      {/* Challenge 3: Error Boundary */}
      <h2>3. Error Boundary</h2>

      <ErrorBoundary>
        <BrokenProductCard />
      </ErrorBoundary>

      <hr />

      {/* Challenge 4: React Portal */}
      <h2>4. React Portal (Modal)</h2>

      <button onClick={() => setShowModal(true)}>Open Modal</button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>Portal Modal</h2>
        <p>This modal renders OUTSIDE the root component.</p>
      </Modal>
    </div>
  );
}

export default App;
