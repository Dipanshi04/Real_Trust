import express from "express";
import Client from "../models/Client.js";
import {
  clientValidationRules,
  idValidationRules,
  validate,
} from "../middleware/validation.js";

const router = express.Router();

// @route   GET /api/clients
// @desc    Get all clients/testimonials
// @access  Public
router.get("/", async (req, res, next) => {
  try {
    const { isActive } = req.query;

    // Build query
    const query = {};
    if (isActive !== undefined) query.isActive = isActive === "true";

    const clients = await Client.find(query)
      .sort({ order: 1, createdAt: -1 })
      .lean();

    res.json({
      success: true,
      count: clients.length,
      data: clients,
    });
  } catch (error) {
    next(error);
  }
});

// @route   GET /api/clients/:id
// @desc    Get single client by ID
// @access  Public
router.get("/:id", idValidationRules, validate, async (req, res, next) => {
  try {
    const client = await Client.findById(req.params.id);

    if (!client) {
      return res.status(404).json({
        success: false,
        error: "Client not found",
      });
    }

    res.json({
      success: true,
      data: client,
    });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/clients
// @desc    Create new client testimonial
// @access  Private (Admin)
router.post("/", clientValidationRules, validate, async (req, res, next) => {
  try {
    const client = await Client.create(req.body);

    res.status(201).json({
      success: true,
      message: "Client testimonial created successfully",
      data: client,
    });
  } catch (error) {
    next(error);
  }
});

// @route   PUT /api/clients/:id
// @desc    Update client testimonial
// @access  Private (Admin)
router.put(
  "/:id",
  idValidationRules,
  clientValidationRules,
  validate,
  async (req, res, next) => {
    try {
      const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!client) {
        return res.status(404).json({
          success: false,
          error: "Client not found",
        });
      }

      res.json({
        success: true,
        message: "Client testimonial updated successfully",
        data: client,
      });
    } catch (error) {
      next(error);
    }
  }
);

// @route   DELETE /api/clients/:id
// @desc    Delete client testimonial
// @access  Private (Admin)
router.delete("/:id", idValidationRules, validate, async (req, res, next) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);

    if (!client) {
      return res.status(404).json({
        success: false,
        error: "Client not found",
      });
    }

    res.json({
      success: true,
      message: "Client testimonial deleted successfully",
      data: {},
    });
  } catch (error) {
    next(error);
  }
});

export default router;
