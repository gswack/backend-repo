const fs = require('fs');
const crypto = require("node:crypto");

if (!global.crypto) {
  global.crypto = crypto;
}

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const hotelsRoute = require("./routes/hotels");

console.log(hotelsRoute);
console.log(typeof hotelsRoute);
console.log(hotelsRoute instanceof Function);
console.log(require.resolve("./routes/hotels"));
console.log(require.resolve("./routes/reservations"));
console.log(require("./routes/hotels"));
console.log(require("./routes/reservations"));

app.use(cors());
app.use(express.json());

// MongoDB connection from OpenBao secret
const mongoUri = fs
  .readFileSync('/vault/secrets/mongo-uri', 'utf8')
  .trim();

console.log("MongoDB URI loaded from OpenBao");

mongoose.connect(mongoUri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Routes
app.use("/hotels", require("./routes/hotels"));
app.use("/reservations", require("./routes/reservations"));

app.listen(3001, () => console.log("Server running on port 3001"));