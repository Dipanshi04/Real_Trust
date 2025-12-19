import express from "express";
import Contact from "../models/Contact.js";
import {
  contactValidationRules,
  idValidationRules,
  validate,
} from "../middleware/validation.js";

const router = express.Router();

// @route   GET /api/contacts
// @desc    Get all contact submissions
// @access  Private (Admin)
router.get("/", async (req, res, next) => {
  try {
    const { status, limit } = req.query;

    // Build query
    const query = {};
    if (status) query.status = status;

    let contactsQuery = Contact.find(query).sort({ createdAt: -1 });

    if (limit) {
      contactsQuery = contactsQuery.limit(parseInt(limit));
    }

    const contacts = await contactsQuery.lean();

    res.json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
});

// @route   GET /api/contacts/:id
// @desc    Get single contact by ID
// @access  Private (Admin)
router.get("/:id", idValidationRules, validate, async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: "Contact not found",
      });
    }

    // Update status to 'read' if it's 'new'
    if (contact.status === "new") {
      contact.status = "read";
      await contact.save();
    }

    res.json({
      success: true,
      data: contact,
    });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/contacts
// @desc    Submit new contact form
// @access  Public
router.post("/", contactValidationRules, validate, async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);

    res.status(201).json({
      success: true,
      message:
        "Contact form submitted successfully. We will get back to you soon!",
      data: contact,
    });
  } catch (error) {
    next(error);
  }
});

// @route   PUT /api/contacts/:id
// @desc    Update contact status/notes
// @access  Private (Admin)
router.put("/:id", idValidationRules, validate, async (req, res, next) => {
  try {
    const { status, notes } = req.body;

    const updateData = {};
    if (status) updateData.status = status;
    if (notes !== undefined) updateData.notes = notes;

    const contact = await Contact.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: "Contact not found",
      });
    }

    res.json({
      success: true,
      message: "Contact updated successfully",
      data: contact,
    });
  } catch (error) {
    next(error);
  }
});

// @route   DELETE /api/contacts/:id
// @desc    Delete contact submission
// @access  Private (Admin)
router.delete("/:id", idValidationRules, validate, async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: "Contact not found",
      });
    }

    res.json({
      success: true,
      message: "Contact deleted successfully",
      data: {},
    });
  } catch (error) {
    next(error);
  }
});

// @route   GET /api/contacts/stats/summary
// @desc    Get contact statistics
// @access  Private (Admin)
router.get("/stats/summary", async (req, res, next) => {
  try {
    const stats = await Contact.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);

    const total = await Contact.countDocuments();

    res.json({
      success: true,
      data: {
        total,
        byStatus: stats,
      },
    });
  } catch (error) {
    next(error);
  }
});

export default router;
