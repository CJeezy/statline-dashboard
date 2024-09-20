// controllers/riotController.js
const { getSummonerData } = require('../services/riotService');

const fetchSummonerData = async (req, res) => {
  const summonerName = req.params.summonerName;
  try {
    const summonerData = await getSummonerData(summonerName);
    res.json(summonerData); // Send the data back to the frontend
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { fetchSummonerData };
