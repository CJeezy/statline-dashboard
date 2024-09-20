const express = require('express');
const router = express.Router();
const axios = require('axios');

// Get Summoner Data
router.get('/summoner/:name', async (req, res) => {
  const summonerName = req.params.name;
  try {
    const response = await axios.get(
      `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
      {
        headers: { 'X-Riot-Token': process.env.RIOT_API_KEY },
      }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching data from Riot API' });
  }
});

module.exports = router;
