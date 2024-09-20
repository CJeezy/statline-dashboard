// src/pages/Dashboard.js
import React, { useState } from 'react';
import { fetchSummonerData } from '../services/riotService';

const Dashboard = () => {
  const [summonerName, setSummonerName] = useState('');
  const [summonerData, setSummonerData] = useState(null);
  const [error, setError] = useState('');

  const handleFetchData = async () => {
    try {
      const data = await fetchSummonerData(summonerName);
      setSummonerData(data); // Store the fetched data
      setError('');
    } catch (err) {
      setError('Failed to fetch data');
    }
  };

  return (
    <div>
      <h1>League of Legends Dashboard</h1>

      <input
        type="text"
        placeholder="Enter Summoner Name"
        value={summonerName}
        onChange={(e) => setSummonerName(e.target.value)}
      />
      <button onClick={handleFetchData}>Get Summoner Data</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {summonerData && (
        <div>
          <h2>Summoner Data:</h2>
          <p><strong>Summoner Name:</strong> {summonerData.name}</p>
          <p><strong>Level:</strong> {summonerData.summonerLevel}</p>
          <p><strong>Account ID:</strong> {summonerData.accountId}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
