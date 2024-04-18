import React from 'react';
import { Link } from 'react-router-dom';

function PlayerCard({ player, onDelete }) {
  const handleDelete = () => {
    // Call the onDelete callback function passed from the parent component
    onDelete(player.id);
  };

  return (
    <div className="player-card">
      <div>
        <p>Name: {player.name}</p>
        <p>Age: {player.age}</p>
        <p>Breed: {player.breed}</p>
        <p>Owner: {player.owner}</p>
      </div>
      <img src={player.imageUrl} alt={`photo of ${player.name} the puppy`} />
      <Link to={`/players/${player.id}`} className="details-btn">See details</Link>
      <button className="remove-btn" onClick={handleDelete}>Remove from roster</button>
    </div>
  );
}

export default PlayerCard;
