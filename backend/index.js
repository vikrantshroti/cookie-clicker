const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

app.listen(5001, () => console.log("Server started on http://localhost:5001"));

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/cookie-clicker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

const rewardRoutes = require("./routes/reward");
app.use("/api", rewardRoutes);
