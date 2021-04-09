// const {Schema, model} = require('mongoose')
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    required: true,
    default: 2,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = { User };
