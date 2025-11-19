import React, { useState } from "react";
import StatsCard from "./StatsCard";
import ModalPortal from "./ModalPortal"; // ✅ FIXED IMPORT

function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  const cards = [
    { id: 1, title: "Total Users", value: 1200, lastUpdated: "Today" },
    { id: 2, title: "Active Courses", value: 18, lastUpdated: "1 hour ago" },
    { id: 3, title: "Pending Enrollments", value: 5, lastUpdated: "Just now" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      <button
        onClick={() => setShowModal(true)}
        style={{
          padding: "10px",
          marginBottom: "20px",
          cursor: "pointer",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Open Notification Modal
      </button>

      <div style={{ display: "flex", gap: "20px" }}>
        {cards.map((card) => (
          <StatsCard
            key={card.id}
            title={card.title}
            value={card.value}
            lastUpdated={card.lastUpdated}
          />
        ))}
      </div>

      {/* PORTAL POPUP */}
      {showModal && (
        <ModalPortal>
          <div
            style={{
              padding: "20px",
              background: "#fff",
              borderRadius: "10px",
              width: "300px",
              margin: "auto",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          >
            <h3>Notification</h3>
            <p>This is a portal modal popup using React Portals.</p>

            <button
              onClick={() => setShowModal(false)}
              style={{
                padding: "10px",
                marginTop: "10px",
                cursor: "pointer",
                background: "red",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Close
            </button>
          </div>
        </ModalPortal>
      )}
    </div>
  );
}

export default Dashboard;
