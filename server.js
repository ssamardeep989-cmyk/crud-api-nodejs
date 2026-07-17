const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/products", productRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("CRUD API is Running 🚀");
});

// Connect MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err.message);
  });