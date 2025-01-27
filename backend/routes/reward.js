const express = require("express");
const calculateRewards = require("../jobs/reward");
const updateUser = require("../jobs/updateuser");

const router = express.Router();

router.post("/click", async (req, res) => {
  try {
    const reward = calculateRewards();
    const updatedUser = await updateUser(req.body.userId, reward);
    res.json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
