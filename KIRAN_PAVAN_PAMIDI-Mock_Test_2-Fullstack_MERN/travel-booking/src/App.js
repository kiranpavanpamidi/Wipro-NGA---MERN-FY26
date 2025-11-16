import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './UserStory1/Header';
import Footer from './UserStory1/Footer';
import Home from './UserStory2/Home';
import Packages from './UserStory2/Packages';
import BookingForm from './UserStory3/BookingForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <nav className="p-3 text-center">
        <Link className="btn btn-outline-primary m-2" to="/">Home</Link>
        <Link className="btn btn-outline-primary m-2" to="/packages">Packages</Link>
        <Link className="btn btn-outline-primary m-2" to="/booking">Booking</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
