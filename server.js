import "dotenv/config.js";
import express from "express";
import connectDB from "./config/database.js";

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB and start server
(async () => {
  await connectDB();

  // Simple Test Route
  app.get("/", (req, res) => {
    res.json({ message: "Server is running 🚀" });
  });

  // Simple API Route
  app.get("/api/test", (req, res) => {
    res.json({
      success: true,
      message: "API is working properly",
    });
  });

  // Start Server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})();