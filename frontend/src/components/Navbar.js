import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        🏠 Restaurants
      </Link>

      <Link to="/menu">
        🍽️ Menu
      </Link>

      <Link to="/reservation">
        📅 Reservation
      </Link>

      <Link to="/dashboard">
        👤 Dashboard
      </Link>
    </nav>
  );
}

export default Navbar;