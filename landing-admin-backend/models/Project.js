import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Project name is required"],
      trim: true,
      maxlength: [100, "Project name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Project description is required"],
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    image: {
      type: String,
      required: [true, "Project image is required"],
      trim: true,
    },
    category: {
      type: String,
      trim: true,
      default: "General",
    },
    status: {
      type: String,
      enum: ["available", "sold", "pending", "upcoming"],
      default: "available",
    },
    location: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      min: [0, "Price cannot be negative"],
    },
    bedrooms: {
      type: Number,
      min: [0, "Bedrooms cannot be negative"],
    },
    bathrooms: {
      type: Number,
      min: [0, "Bathrooms cannot be negative"],
    },
    area: {
      type: Number,
      min: [0, "Area cannot be negative"],
    },
    features: [
      {
        type: String,
        trim: true,
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
projectSchema.index({ status: 1, isActive: 1 });
projectSchema.index({ createdAt: -1 });

const Project = mongoose.model("Project", projectSchema);

export default Project;
