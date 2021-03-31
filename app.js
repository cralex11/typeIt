const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors")

const PORT = config.get("port") || 5000;
const app = express();

//middleware
app.use(cors())
app.use(express.json({extended: true}));

//db connection
async function start() {
    try {
        await mongoose.connect(config.get("mongoUri"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
    } catch (e) {
        console.log("Server Error", e.message);
        process.exit();
    }
}

start().then(()=>console.log("db started"));
//--------------------------
//test
app.post("/", (req, res) => {
    res.send("good");
});


//use routes
app.use("/api/auth", require("./routes/auth.routes"));

app.listen(config.get("port"), () =>
    console.log(`App has been started on port ${PORT}`)
);
