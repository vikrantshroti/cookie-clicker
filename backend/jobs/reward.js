const calculateRewards = (user) => {
  const reward = { points: 0, prize: false };

  if (Math.random() < 0.5) reward.points = 10;
  if (Math.random() < 0.25) reward.prize = true;

  return reward;
};

module.exports = calculateRewards;
