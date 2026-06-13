import React from "react";

function ConfirmationPage() {
  const reservation =
    JSON.parse(
      localStorage.getItem("reservation")
    ) || {};

  return (
    <div className="container">
      <div className="card">
        <h1>✅ Reservation Confirmed</h1>

        <p>
          <strong>Restaurant:</strong>{" "}
          {reservation.restaurant}
        </p>

        <p>
          <strong>Date:</strong>{" "}
          {reservation.date}
        </p>

        <p>
          <strong>Time:</strong>{" "}
          {reservation.time}
        </p>

        <p>
          <strong>Guests:</strong>{" "}
          {reservation.guests}
        </p>

        <button
          onClick={() =>
            (window.location.href = "/dashboard")
          }
        >
          Go To Dashboard
        </button>
      </div>
    </div>
  );
}

export default ConfirmationPage;