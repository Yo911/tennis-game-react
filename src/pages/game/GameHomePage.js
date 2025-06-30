import { useState } from 'react';
import { launchGame } from '../api/TennisGame';

function GameHomePage() {
  const [query, setQuery] = useState('');
  const [gameResults, setGameResults] = useState([]);
  const [erreur, setErreur] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (query.trim() !== '') {
      handleLaunch(query);
    }
  };

  const handleLaunch = async (gamePoints) => {
    try {
      setLoading(true);
      setErreur('');
      const data = await launchGame(gamePoints);
      console.log(data);
      setGameResults(data);
    } catch (e) {
      setErreur("Erreur lors de la récupération des résultats" + e);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1>Tennis Game</h1>
        <input
            type="text"
            placeholder="exemple ABAABBBB"
            onChange={(e) => setQuery(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
      <button onClick={handleClick}>Rechercher</button>

        {loading && <p>Chargement...</p>}

        <ul>
          {gameResults.map(result => (
            <li>{result}</li>
          ))}
        </ul>
      </div>
  );
}
export default GameHomePage;