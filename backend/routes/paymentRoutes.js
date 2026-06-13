const express = require("express");
const router = express.Router();

const {
  createOrder,
} = require("../controllers/paymentController");

router.get("/", (req, res) => {
  res.send("Payment Route Working");
});

router.post("/create-order", createOrder);

module.exports = router;