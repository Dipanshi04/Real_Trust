import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import projectRoutes from "./routes/projects.js";
import clientRoutes from "./routes/clients.js";
import contactRoutes from "./routes/contacts.js";
import subscriberRoutes from "./routes/subscribers.js";

const app = express();

// Middleware
const corsOptions = {
  origin: "*", // Allow all origins for now
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// Health check route
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Real Trust Backend Server is running",
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/subscribers", subscriberRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
    path: req.path,
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error("❌ Error:", error);

  if (error.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      error: "Validation failed",
      details: Object.values(error.errors).map((err) => err.message),
    });
  }

  if (error.name === "CastError") {
    return res.status(400).json({
      success: false,
      error: "Invalid ID format",
    });
  }

  if (error.code === 11000) {
    return res.status(409).json({
      success: false,
      error: "Duplicate entry",
      field: Object.keys(error.keyPattern)[0],
    });
  }

  res.status(error.status || 500).json({
    success: false,
    error: error.message || "Internal server error",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 API Base URL: http://localhost:${PORT}/api`);
  console.log(
    `🌐 Frontend URL: ${process.env.FRONTEND_URL || "http://localhost:5173"}`
  );
});
