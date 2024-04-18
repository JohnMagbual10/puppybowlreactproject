// SinglePlayer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePlayer } from '../API';

function SinglePlayer() {
  const [player, setPlayer] = useState(null);
  const { playerId } = useParams();

  useEffect(() => {
    const getPlayerByID = async () => {
      const player = await fetchSinglePlayer(playerId);
      setPlayer(player);
    };
    getPlayerByID();
  }, [playerId]);

  if (!player) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>{player.name}</h2>
      <img src={player.imageUrl} alt={`photo of ${player.name} the puppy`} />
      <p>Age: {player.age}</p>
      <p>Breed: {player.breed}</p>
      <p>Owner: {player.owner}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default SinglePlayer;
