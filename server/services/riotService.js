// services/riotService.js
const axios = require('axios');

// Function to get summoner data
const getSummonerData = async (summonerName) => {
  try {
    const response = await axios.get(
      `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
      {
        headers: {
          'X-Riot-Token': process.env.RIOT_API_KEY, // Make sure you have RIOT_API_KEY in your .env
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch summoner data');
  }
};

module.exports = { getSummonerData };
