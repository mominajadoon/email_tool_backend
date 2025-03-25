const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
// 
// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Routes
app.use("/api/auth", require("../backend/Routes/authRoutes"));
// app.use("/api/email", require("./Routes/emailRoutes"));

// Home Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Export App
module.exports = app;
