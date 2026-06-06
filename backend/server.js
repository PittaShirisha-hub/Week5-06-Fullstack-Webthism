require("dotenv").config();

const express = require("express");
const cors = require("cors");
const supabase = require("./supabase");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Restaurant Reservation API Running...");
});

/* =========================
   RESTAURANTS
========================= */

app.get("/api/restaurants", async (req, res) => {
  const { data, error } = await supabase
    .from("restaurants")
    .select("*");

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});

/* =========================
   MENUS
========================= */

app.get("/api/menus", async (req, res) => {
  const { data, error } = await supabase
    .from("menus")
    .select("*");

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});

/* =========================
   USERS
========================= */

app.get("/api/users", async (req, res) => {
  const { data, error } = await supabase
    .from("users")
    .select("*");

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});

/* =========================
   RESERVATIONS
========================= */

app.get("/api/reservations", async (req, res) => {
  const { data, error } = await supabase
    .from("reservations")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});

/* =========================
   CREATE RESERVATION
========================= */

app.post("/api/reservations", async (req, res) => {
  try {
    const {
      user_id,
      restaurant_id,
      reservation_date,
      reservation_time,
      guests,
      status,
    } = req.body;

    const { data, error } = await supabase
      .from("reservations")
      .insert([
        {
          user_id,
          restaurant_id,
          reservation_date,
          reservation_time,
          guests,
          status,
        },
      ])
      .select();

    if (error) {
      console.log(error);
      return res.status(500).json(error);
    }

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/* =========================
   DELETE RESERVATION
========================= */

app.delete("/api/reservations/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("reservations")
      .delete()
      .eq("id", id);

    if (error) {
      console.log(error);
      return res.status(500).json(error);
    }

    res.json({
      success: true,
      message: "Reservation Cancelled Successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});