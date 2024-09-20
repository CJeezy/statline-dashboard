// src/pages/Dashboard.js
import React, { useState } from 'react';
import { getSummonerData } from '../services/riotService';

const Dashboard = () => {
  const [summonerName, setSummonerName] = useState('');
  const [summonerData, setSummonerData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await getSummonerData(summonerName);
      setSummonerData(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>League of Legends Stats</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={summonerName}
          onChange={(e) => setSummonerName(e.target.value)}
          placeholder="Enter Summoner Name"
          required
        />
        <button type="submit">Get Stats</button>
      </form>
      {summonerData && (
        <div>
          <h2>Summoner Name: {summonerData.name}</h2>
          <p>Level: {summonerData.summonerLevel}</p>
          {/* Add more stats as needed */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
