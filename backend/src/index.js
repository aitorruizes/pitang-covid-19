const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv").config();

const {MONGO_URL, HTTP_PORT} = process.env;

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}.`);
});