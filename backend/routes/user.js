const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const { userId } = req.body;
    const newUser = new User({ _id: userId });
    await newUser.save();
    res.json({ success: true, user: newUser });
  } catch (error) {
    console.error(`Error creating user: ${error.message}`);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
