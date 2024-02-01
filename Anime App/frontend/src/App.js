import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [animeId, setAnimeId] = useState('');
  const [animeData, setAnimeData] = useState(null);

  const fetchAnimeData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/anime/${animeId}`);
      setAnimeData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Anime Information</h1>
      <label htmlFor="animeId">Enter Anime ID:</label>
      <input
        type="text"
        id="animeId"
        value={animeId}
        onChange={(e) => setAnimeId(e.target.value)}
      />
      <button onClick={fetchAnimeData}>Fetch Anime</button>
      {animeData && (
        <div>
          <h2>{animeData.title}</h2>
          <img src={animeData.image_url} alt={animeData.title} />
          <p>{animeData.synopsis}</p>
        </div>
      )}
    </div>
  );
}

export default App;