const jwt = require("jsonwebtoken");
const ApiError = require("../error/ApiError");
module.exports = (role) => {
  return (req, res, next) => {
    if (req.method === "OPTIONS") next();
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) return res.status(401).json({ message: "Not authorized" });
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      if (decoded.role !== role)
        return ApiError.custom(403, "Missing permission");
    } catch (e) {
      res.status(401).json({ message: "Not authorized" });
    }
  };
};
