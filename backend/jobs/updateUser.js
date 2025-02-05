const User = require("../models/user");

const updateUser = async (userId, reward) => {
  const user = await User.findById(userId);

  if (!user) throw new Error("User not found");

  user.totalClicks += 1;
  user.totalPoints += reward.points;

  if (reward.prize) user.prizesWon += 1;

  await user.save();
  return user;
};

module.exports = updateUser;
