const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../models/user");
const router = new Router();

router
  .post(
    "/register",
    [
      check("email", "Email is wrong").isEmail(),
      check("password", "Password is wrong, min length 6").isLength({ min: 6 }),
    ],
    async (req, res) => {
      try {
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(400).json({
            errors: errors.array(),
            message: "Register data is wrong",
          });

        const { email, password } = req.body;

        const candidate = await User.findOne({ email });

        if (candidate) {
          res.status(400).json({ message: "This email already exists!" });
        }

        const hashedPassword = await bcrypt.hash(password, 11);

        const user = new User({ email, password: hashedPassword });

        await user.save();

        res.status(201).json({ message: "User has been created!" });
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
    }
  )
  .post(
    "/login",
    [
      check("email", "Email is wrong").normalizeEmail().isEmail(),
      check("password", "Password is wrong, min length 6").exists(),
    ],
    async (req, res) => {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res
            .status(400)
            .json({ errors: errors.array(), message: "Login data is wrong" });

        const { email, password } = req.body;

        const user = await User.findOne({ email });
        console.log(user);

        if (!user)
          return res.status(400).json({ message: "User does not exists!" });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) res.status(400).json({ message: "Password is wrong" });

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        res.json({ token, userIdL: user.id });
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
    }
  );

module.exports = router;
