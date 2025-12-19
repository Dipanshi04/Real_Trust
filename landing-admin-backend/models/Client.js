import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Client name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    designation: {
      type: String,
      required: [true, "Client designation is required"],
      trim: true,
      maxlength: [100, "Designation cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Testimonial description is required"],
      trim: true,
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },
    image: {
      type: String,
      required: [true, "Client image is required"],
      trim: true,
    },
    rating: {
      type: Number,
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot exceed 5"],
      default: 5,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Index for ordering and active status
clientSchema.index({ isActive: 1, order: 1 });
clientSchema.index({ createdAt: -1 });

const Client = mongoose.model("Client", clientSchema);

export default Client;
