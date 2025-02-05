const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  _id: String,
  totalClicks: { type: Number, default: 0 },
  totalPoints: { type: Number, default: 0 },
  prizesWon: { type: Number, default: 0 },
});

module.exports = mongoose.model("User", UserSchema);
