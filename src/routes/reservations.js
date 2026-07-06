const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation");

// Create Reservation
router.post("/", async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();

    res.json({
      message: "Reservation created successfully",
      reservation
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Reservation Lookup
router.get("/lookup", async (req, res) => {
  const { query } = req.query;

  const reservation = await Reservation.findOne({
    $or: [
      { fullName: query },
      { email: query }
    ]
  });

  if (!reservation) {
    return res.json({ found: false });
  }

  res.json({ found: true, reservation });
});


// Cancel reservation
router.delete("/:id", async (req, res) => {
  const deleted = await Reservation.findByIdAndDelete(req.params.id);

  if (!deleted) {
    return res.status(404).json({ error: "Reservation not found." });
  }

  res.json({ message: "Reservation canceled successfully." });
});

module.exports = router;
