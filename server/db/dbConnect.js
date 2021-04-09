const mongoose = require("mongoose");

//db connection
const connect = async () => {
  try {
    const res = await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    if (res) console.log("DB has been connected successfully!!!");
    else console.log("Something went wrong, db isn't connected!");
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit();
  }
};

exports.connect = connect;
