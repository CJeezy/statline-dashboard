// src/services/apiService.js
import axios from 'axios';

// Function to call backend for summoner data
export const fetchSummonerData = async (summonerName) => {
  try {
    const response = await axios.get(`/api/riot/summoner/${summonerName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching summoner data:', error);
    throw error;
  }
};
