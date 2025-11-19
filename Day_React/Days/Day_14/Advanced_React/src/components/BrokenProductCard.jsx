import React from "react";

function BrokenProductCard() {
  throw new Error("Product component crashed!");

  return (
    <div>
      <h3>Broken Product Card</h3>
    </div>
  );
}

export default BrokenProductCard;
