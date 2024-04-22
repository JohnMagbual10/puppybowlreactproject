// SinglePlayer.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePlayer, deletePlayer } from '../API';

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

  const handleDelete = async () => {
    try {
      await deletePlayer(playerId);
      // Redirect to the players list or do any other action after deletion
    } catch (error) {
      console.error('Error deleting player:', error);
      // Handle error, show error message, etc.
    }
  };

  if (!player) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>{player.name}</h2>
      <img src={player.imageUrl} alt={`photo of ${player.name} the puppy`} />
      <p>Age: {player.age}</p>
      <p>Breed: {player.breed}</p>
      <p>Owner: {player.owner}</p>
      {/* Add delete button */}
      <button onClick={handleDelete}>Delete Player</button>
    </div>
  );
}

export default SinglePlayer;
