require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
//middleware

app.use(cors());
app.use(express.json({ extended: true }));

//db connection
async function start() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit();
  }
}

start().then(() => console.log("db started"));
//--------------------------
//test
app.get("/", (req, res) => {
  res.send("good");
});

//use routes
app.use("/api/auth", require("./routes/auth.routes"));

app.listen(process.env.PORT || 5000, () =>
  console.log(`App has been started on port ${process.env.PORT || 5000}`)
);
