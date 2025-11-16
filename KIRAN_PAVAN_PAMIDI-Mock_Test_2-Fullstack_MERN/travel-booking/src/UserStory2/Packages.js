import React, { useEffect, useState } from "react";
import axios from "axios";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/packages")
      .then((response) => {
        setPackages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching packages:", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Available Packages</h2>

      <div className="row">
        {packages.length > 0 ? (
          packages.map((pkg) => (
            <div key={pkg.id} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                    <img src={pkg.image} alt={pkg.name} className="card-img-top" style={{ height: "180px", objectFit: "cover" }}/>
                  <h5 className="card-title">{pkg.name}</h5>
                  <p className="card-text">Price: Rs{pkg.price}</p>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No packages available.</p>
        )}
      </div>
    </div>
  );
};

export default Packages;
