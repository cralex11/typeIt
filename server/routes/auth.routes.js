const { Router } = require("express");
const { check, validationResult } = require("express-validator");

const authMiddleware = require("../middleware/authMiddleware");
const {
  login,
  register,
  check: checkAuth,
} = require("../controllers/userControllers");

const router = new Router();

router
  .post(
    "/register",
    [
      check("email", "Email is wrong").isEmail(),
      check("password", "Password is wrong, min length 6").isLength({ min: 6 }),
    ],
    login
  )
  .post(
    "/login",
    [
      check("email", "Email is wrong").normalizeEmail().isEmail(),
      check("password", "Password is wrong, min length 6").exists(),
    ],
    register
  )
  .get("/auth", authMiddleware, checkAuth);

module.exports = router;
