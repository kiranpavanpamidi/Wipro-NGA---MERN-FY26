import React from "react";

function Loader() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div
        style={{
          width: "40px",
          height: "40px",
          border: "4px solid #ddd",
          borderTop: "4px solid #007bff",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          margin: "0 auto",
        }}
      ></div>

      <p>Loading...</p>

      <style>
        {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}
      </style>
    </div>
  );
}

export default Loader;