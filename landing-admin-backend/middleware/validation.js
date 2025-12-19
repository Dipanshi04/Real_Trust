import { body, param, validationResult } from "express-validator";

// Validation result handler
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: "Validation Error",
      errors: errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      })),
    });
  }
  next();
};

// Project validation rules
export const projectValidationRules = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Project name is required")
    .isLength({ max: 100 })
    .withMessage("Name cannot exceed 100 characters"),
  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ max: 500 })
    .withMessage("Description cannot exceed 500 characters"),
  body("image").trim().notEmpty().withMessage("Project image is required"),
  body("status")
    .optional()
    .isIn(["available", "sold", "pending", "upcoming"])
    .withMessage("Invalid status"),
  body("price")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),
  body("bedrooms")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Bedrooms must be a positive integer"),
  body("bathrooms")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Bathrooms must be a positive integer"),
  body("area")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Area must be a positive number"),
];

// Client validation rules
export const clientValidationRules = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Client name is required")
    .isLength({ max: 100 })
    .withMessage("Name cannot exceed 100 characters"),
  body("designation")
    .trim()
    .notEmpty()
    .withMessage("Designation is required")
    .isLength({ max: 100 })
    .withMessage("Designation cannot exceed 100 characters"),
  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ max: 1000 })
    .withMessage("Description cannot exceed 1000 characters"),
  body("image").trim().notEmpty().withMessage("Client image is required"),
  body("rating")
    .optional()
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating must be between 1 and 5"),
];

// Contact validation rules
export const contactValidationRules = [
  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("Full name is required")
    .isLength({ max: 100 })
    .withMessage("Name cannot exceed 100 characters"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),
  body("mobile")
    .trim()
    .notEmpty()
    .withMessage("Mobile number is required")
    .matches(/^[0-9]{10,15}$/)
    .withMessage("Please provide a valid mobile number (10-15 digits)"),
  body("city")
    .trim()
    .notEmpty()
    .withMessage("City is required")
    .isLength({ max: 100 })
    .withMessage("City name cannot exceed 100 characters"),
  body("message")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Message cannot exceed 1000 characters"),
];

// Subscriber validation rules
export const subscriberValidationRules = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),
];

// ID param validation
export const idValidationRules = [
  param("id").isMongoId().withMessage("Invalid ID format"),
];
