const express = require("express");
const calculateRewards = require("../jobs/reward");
const updateUser = require("../jobs/updateUser");
const User = require("../models/user");

const router = express.Router();

router.post("/click", async (req, res) => {
  try {
    const userId = req.body.userId;
    console.log(`Received request to /click with userId: ${userId}`);

    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    console.log(`User found: ${user}`);

    const reward = calculateRewards(user);
    console.log(`Calculated reward: ${JSON.stringify(reward)}`);

    const updatedUser = await updateUser(userId, reward);
    console.log(`Updated user: ${updatedUser}`);

    res.json({ success: true, user: updatedUser, reward });
  } catch (error) {
    console.error(`Error in /click route: ${error.message}`);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
