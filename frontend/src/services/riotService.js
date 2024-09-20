// src/services/riotService.js
import axios from 'axios';

export const getSummonerData = async (summonerName) => {
  const response = await axios.get(`/api/riot/summoner/${summonerName}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};
