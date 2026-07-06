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

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/hotelapp")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/hotels", require("./routes/hotels"));
app.use("/reservations", require("./routes/reservations"));

app.listen(3000, () => console.log("Server running on port 3000"));
