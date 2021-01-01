const mongoose = require("mongoose");
require("dotenv").config();
require("colors");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: false,
      autoIndex: false,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Restaurant Database Connected".brightCyan));
};
module.exports = connectDB;