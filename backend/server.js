const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 9500;
const MONGO_CONN = process.env.MONGO_CONN
express.urlencoded({ extended: true });

mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;

// connect to the database
mongoose.connect(process.env.MONGO_CONN);

// When successfully connected
mongoose.connection.on('connected', () => {
    console.log('Connection to database established successfully');
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
    console.error(`Error connecting to database: ${err}`);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.log('Database disconnected');
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
    const {email, password} = req.body;
    
})
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
