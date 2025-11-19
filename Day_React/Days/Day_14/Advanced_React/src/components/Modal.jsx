import React from "react";
import ModalPortal from "./ModalPortal";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <ModalPortal>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: "fadeIn 0.3s",
        }}
        onClick={onClose}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            minWidth: "300px",
            animation: "scaleIn 0.3s",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            style={{
              float: "right",
              border: "none",
              background: "red",
              color: "white",
              padding: "5px 10px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            X
          </button>

          {children}
        </div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes scaleIn {
            from { transform: scale(0.8); }
            to { transform: scale(1); }
          }
        `}</style>
      </div>
    </ModalPortal>
  );
}

export default Modal;
