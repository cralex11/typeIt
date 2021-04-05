const ApiError = require("../error/ApiError");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

//create jwt
const generateJwt = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

const register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return next(ApiError.badRequest("Login data is wrong"));

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return next(ApiError.badRequest("User does not exists!"));
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return next(ApiError.badRequest("Password is wrong"));

    const token = generateJwt(user.id, user.role);
    res.json({ token, userIdL: user.id });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return next(ApiError.badRequest("Register data is wrong"));

    const { email, password } = req.body;

    const candidate = await User.findOne({ email });

    if (candidate) {
      return next(ApiError.badRequest("This email already exists!"));
    }

    const hashedPassword = await bcrypt.hash(password, 11);

    const user = new User({ email, password: hashedPassword });

    await user.save();

    const getUser = await User.findOne({ email });
    const token = generateJwt(getUser.id, getUser.role);
    res.json({ token });
  } catch (e) {
    return next(ApiError.badRequest(e.message));
  }
};

const check = async (req, res, next) => {
  const token = generateJwt(req.user.id, req.user.role);
  return res.json({ token });
};

module.exports = { check, login, register };
