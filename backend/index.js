const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from frontend
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(bodyParser.json());

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

const userRoutes = require("./routes/user");
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

app.listen(5001, () => console.log("Server started on http://localhost:5001"));
