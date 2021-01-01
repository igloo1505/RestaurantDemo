require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const colors = require("colors")
const cors = require("cors");
const app = express();
app.use(cors());
connectDB();


app.use(express.json({ extended: false }));


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
  }

  const PORT = process.env.PORT || 5002;

  app.listen(PORT, () => console.log(`Running Restaurant Demo App Server on port ${PORT}`.brightCyan));