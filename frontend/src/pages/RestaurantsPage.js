import React, { useEffect, useState } from "react";
import axios from "axios";

function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/restaurants")
      .then((res) => {
        setRestaurants(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div
        style={{
          background: "#7c3aed",
          color: "white",
          padding: "40px",
          borderRadius: "12px",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1>Welcome to Restaurant Reservation System</h1>

        <p>
          Browse restaurants, explore menus and manage reservations.
        </p>

        <button
          onClick={() => (window.location.href = "/menu")}
          style={{
            background: "white",
            color: "#7c3aed",
            fontWeight: "bold",
          }}
        >
          Explore Menu
        </button>
      </div>

      <div className="stats-container">
        <div className="stats-card">
          <h2>🍽️ {restaurants.length}</h2>
          <p>Restaurants</p>
        </div>

        <div className="stats-card">
          <h2>📋 10</h2>
          <p>Menu Items</p>
        </div>

        <div className="stats-card">
          <h2>📅 1</h2>
          <p>Reservations</p>
        </div>
      </div>

      <h1>Featured Restaurants ({restaurants.length})</h1>

      {restaurants.map((restaurant) => (
        <div className="card" key={restaurant.id}>
          <img
            src={restaurant.image_ur}
            alt={restaurant.name}
          />

          <h2>{restaurant.name}</h2>

          <p>{restaurant.description}</p>

          <p>
            <strong>Address:</strong> {restaurant.address}
          </p>

          <p>
            <strong>Phone:</strong> {restaurant.phone}
          </p>

          <button
            onClick={() =>
              (window.location.href = `/menu/${restaurant.id}`)
            }
          >
            View Menu
          </button>
        </div>
      ))}

      <footer>
        <p>Restaurant Reservation System © 2026</p>
      </footer>
    </div>
  );
}

export default RestaurantsPage;