require("dotenv").config();
const cors = require("cors");
const socket = require("socket.io");
const http = require("http");
const express = require("express");
const errorHandler = require("./middleware/errorHandlingMiddleware");

const app = express();
const server = http.createServer(app);

const io = socket(server);

const auth = require("./routes/auth.routes");
const { connect } = require("./db/dbConnect");

//db start
connect();
//middleware
app.use(cors());
app.use(express.json({ extended: true }));
//--------------------------
//    ROUTES
app.use("/api/auth/", auth);

//errors
app.use(errorHandler);

//--------------------------
// Socket.io

io.on("connection", (socket) => {
  console.log("we are connected");
  socket.on("disconnect", () => {
    console.log("user had left");
  });
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`App has been started on port ${process.env.PORT || 5000}`)
);
