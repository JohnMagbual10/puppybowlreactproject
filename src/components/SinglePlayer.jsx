// SinglePlayer.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePlayer, deletePlayer } from '../API';

function SinglePlayer() {
  const [player, setPlayer] = useState(null);
  const { playerId } = useParams();

  useEffect(() => {
    const getPlayerByID = async () => {
      try {
        const player = await fetchSinglePlayer(playerId);
        setPlayer(player);
      } catch (error) {
        console.error('Error fetching player:', error);
        // Handle error, display error message, etc.
      }
    };
    getPlayerByID();
  }, [playerId]);

  const handleDelete = async () => {
    if (!playerId) {
      console.error('Invalid playerId:', playerId);
      // Handle invalid playerId, display error message, etc.
      return;
    }

    try {
      await deletePlayer(playerId);
      // Redirect or perform any other action after successful deletion
    } catch (error) {
      console.error('Error deleting player:', error);
      // Handle error, display error message, etc.
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
