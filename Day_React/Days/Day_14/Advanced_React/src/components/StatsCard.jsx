import React from "react";

const StatsCard = React.memo(function StatsCard({ title, value, lastUpdated }) {
  console.log(`Rendering: ${title}`);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        width: "200px",
      }}
    >
      <h3>{title}</h3>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>{value}</p>
      <small>Last Updated: {lastUpdated}</small>
    </div>
  );
});

export default StatsCard;
