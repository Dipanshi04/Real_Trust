import express from "express";
import Subscriber from "../models/Subscriber.js";
import {
  subscriberValidationRules,
  idValidationRules,
  validate,
} from "../middleware/validation.js";

const router = express.Router();

// @route   GET /api/subscribers
// @desc    Get all subscribers
// @access  Private (Admin)
router.get("/", async (req, res, next) => {
  try {
    const { isActive } = req.query;

    // Build query
    const query = {};
    if (isActive !== undefined) query.isActive = isActive === "true";

    const subscribers = await Subscriber.find(query)
      .sort({ createdAt: -1 })
      .lean();

    res.json({
      success: true,
      count: subscribers.length,
      data: subscribers,
    });
  } catch (error) {
    next(error);
  }
});

// @route   GET /api/subscribers/:id
// @desc    Get single subscriber by ID
// @access  Private (Admin)
router.get("/:id", idValidationRules, validate, async (req, res, next) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        error: "Subscriber not found",
      });
    }

    res.json({
      success: true,
      data: subscriber,
    });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/subscribers
// @desc    Subscribe to newsletter
// @access  Public
router.post(
  "/",
  subscriberValidationRules,
  validate,
  async (req, res, next) => {
    try {
      const { email } = req.body;

      // Check if email already exists
      const existingSubscriber = await Subscriber.findOne({ email });

      if (existingSubscriber) {
        if (existingSubscriber.isActive) {
          return res.status(400).json({
            success: false,
            error: "This email is already subscribed to our newsletter",
          });
        } else {
          // Reactivate subscription
          existingSubscriber.isActive = true;
          existingSubscriber.subscribedAt = new Date();
          existingSubscriber.unsubscribedAt = undefined;
          await existingSubscriber.save();

          return res.status(200).json({
            success: true,
            message: "Successfully resubscribed to our newsletter!",
            data: existingSubscriber,
          });
        }
      }

      // Create new subscriber
      const subscriber = await Subscriber.create({ email });

      res.status(201).json({
        success: true,
        message: "Successfully subscribed to our newsletter!",
        data: subscriber,
      });
    } catch (error) {
      next(error);
    }
  }
);

// @route   PUT /api/subscribers/:id/unsubscribe
// @desc    Unsubscribe from newsletter
// @access  Public
router.put(
  "/:id/unsubscribe",
  idValidationRules,
  validate,
  async (req, res, next) => {
    try {
      const subscriber = await Subscriber.findById(req.params.id);

      if (!subscriber) {
        return res.status(404).json({
          success: false,
          error: "Subscriber not found",
        });
      }

      if (!subscriber.isActive) {
        return res.status(400).json({
          success: false,
          error: "This email is already unsubscribed",
        });
      }

      subscriber.isActive = false;
      subscriber.unsubscribedAt = new Date();
      await subscriber.save();

      res.json({
        success: true,
        message: "Successfully unsubscribed from newsletter",
        data: subscriber,
      });
    } catch (error) {
      next(error);
    }
  }
);

// @route   DELETE /api/subscribers/:id
// @desc    Delete subscriber (hard delete)
// @access  Private (Admin)
router.delete("/:id", idValidationRules, validate, async (req, res, next) => {
  try {
    const subscriber = await Subscriber.findByIdAndDelete(req.params.id);

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        error: "Subscriber not found",
      });
    }

    res.json({
      success: true,
      message: "Subscriber deleted successfully",
      data: {},
    });
  } catch (error) {
    next(error);
  }
});

// @route   GET /api/subscribers/stats/summary
// @desc    Get subscriber statistics
// @access  Private (Admin)
router.get("/stats/summary", async (req, res, next) => {
  try {
    const total = await Subscriber.countDocuments();
    const active = await Subscriber.countDocuments({ isActive: true });
    const inactive = await Subscriber.countDocuments({ isActive: false });

    res.json({
      success: true,
      data: {
        total,
        active,
        inactive,
      },
    });
  } catch (error) {
    next(error);
  }
});

export default router;
