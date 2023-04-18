const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const UserModel = require("./model/index.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors({ credentials: true }));

const PORT = process.env.PORT || 9500;
const MONGO_CONN = process.env.MONGO_CONN;
const JWT_Secret = 'secret123456';
app.use(express.json());
express.urlencoded({ extended: true });

mongoose.set("strictQuery", true);
mongoose.Promise = global.Promise;

// connect to the database
mongoose.connect(process.env.MONGO_CONN);

// When successfully connected
mongoose.connection.on("connected", () => {
  console.log("Connection to database established successfully");
});

// If the connection throws an error
mongoose.connection.on("error", (err) => {
  console.error(`Error connecting to database: ${err}`);
});

// When the connection is disconnected
mongoose.connection.on("disconnected", () => {
  console.log("Database disconnected");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", async (req, res) => {
  //Payload the email, and password
  const { email, password } = req.body;
  // hading the password
  const hashPassword = bcrypt.hashSync(password, 10);
  try {
    const user = new UserModel({ email: email, password: hashPassword });
    await user
      .save()
      .then((user) =>
        jwt.sign({ id: user._id, email: user.email }, JWT_Secret)
      );
    res.status(201).send({ message: "User Created" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error Creating User" });
  }
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
