import React from "react";
import { createPortal } from "react-dom";

function ModalPortal({ children }) {
  const portalRoot = document.getElementById("modal-root");

  if (!portalRoot) {
    console.error("modal-root NOT FOUND in index.html");
    return null;
  }

  return createPortal(children, portalRoot);
}

export default ModalPortal;
