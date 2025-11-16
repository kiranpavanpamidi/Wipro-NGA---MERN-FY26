import React from 'react';
import DestinationCard from '../UserStory1/DestinationCard';

const destinations = [
  { name: 'Paris', image: 'https://picsum.photos/200/100?1', price: 120000 },
  { name: 'Bali', image: 'https://picsum.photos/200/100?2', price: 60000 },
  { name: 'Tokyo', image: 'https://picsum.photos/200/100?3', price: 150000 }
];

const Home = () => (
  <div className="container text-center mt-4">
    <h3>Featured Destinations</h3>
    <div className="d-flex justify-content-center flex-wrap">
      {destinations.map((d, i) => (
        <DestinationCard key={i} {...d} />
      ))}
    </div>
  </div>
);

export default Home;
