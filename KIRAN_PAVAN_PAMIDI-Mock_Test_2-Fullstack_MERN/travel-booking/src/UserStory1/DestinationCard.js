import React, { useState } from 'react';

const DestinationCard = ({ name, image, price }) => {
  const [wishlisted, setWishlisted] = useState(false);
  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body text-center">
        <h5>{name}</h5>
        <p>Price: Rs{price}</p>
        <button 
          onClick={() => setWishlisted(!wishlisted)} 
          className="btn btn-sm btn-outline-primary"
        >
          {wishlisted ? 'Wishlisted' : 'Add to Wishlist'}
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
