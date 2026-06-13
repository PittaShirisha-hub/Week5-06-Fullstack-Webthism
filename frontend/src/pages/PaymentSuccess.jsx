import React from "react";

function PaymentSuccess() {
  return (
    <div className="container">
      <div className="card">
        <h1>🎉 Payment Successful</h1>

        <p>
          Your payment has been completed successfully.
        </p>

        <button
          onClick={() =>
            (window.location.href = "/confirmation")
          }
        >
          View Confirmation
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccess;