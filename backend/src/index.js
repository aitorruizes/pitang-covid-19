const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

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

app.use("/api", routes);

app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}.`);
});