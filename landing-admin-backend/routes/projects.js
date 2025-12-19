import express from "express";
import Project from "../models/Project.js";
import {
  projectValidationRules,
  idValidationRules,
  validate,
} from "../middleware/validation.js";

const router = express.Router();

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get("/", async (req, res, next) => {
  try {
    const { status, isActive } = req.query;

    // Build query
    const query = {};
    if (status) query.status = status;
    if (isActive !== undefined) query.isActive = isActive === "true";

    const projects = await Project.find(query).sort({ createdAt: -1 }).lean();

    res.json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    next(error);
  }
});

// @route   GET /api/projects/:id
// @desc    Get single project by ID
// @access  Public
router.get("/:id", idValidationRules, validate, async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    res.json({
      success: true,
      data: project,
    });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/projects
// @desc    Create new project
// @access  Private (Admin)
router.post("/", projectValidationRules, validate, async (req, res, next) => {
  try {
    const project = await Project.create(req.body);

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    next(error);
  }
});

// @route   PUT /api/projects/:id
// @desc    Update project
// @access  Private (Admin)
router.put(
  "/:id",
  idValidationRules,
  projectValidationRules,
  validate,
  async (req, res, next) => {
    try {
      const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!project) {
        return res.status(404).json({
          success: false,
          error: "Project not found",
        });
      }

      res.json({
        success: true,
        message: "Project updated successfully",
        data: project,
      });
    } catch (error) {
      next(error);
    }
  }
);

// @route   DELETE /api/projects/:id
// @desc    Delete project
// @access  Private (Admin)
router.delete("/:id", idValidationRules, validate, async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    res.json({
      success: true,
      message: "Project deleted successfully",
      data: {},
    });
  } catch (error) {
    next(error);
  }
});

export default router;
