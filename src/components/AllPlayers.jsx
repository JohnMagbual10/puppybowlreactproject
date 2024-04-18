import React, { useState, useEffect } from 'react';
import { fetchAllPlayers } from '../API';
import PlayerCard from './PlayerCard';

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]); // State for filtered players
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  useEffect(() => {
    const getPlayers = async () => {
      const fetchedPlayers = await fetchAllPlayers();
      setPlayers(fetchedPlayers);
      setFilteredPlayers(fetchedPlayers); // Initialize filtered players with fetched players
    };
    getPlayers();
  }, []);

  // Function to handle player deletion
  const handleDeletePlayer = (playerId) => {
    // Filter out the player with the specified ID
    const updatedPlayers = players.filter(player => player.id !== playerId);
    // Update the list of players
    setPlayers(updatedPlayers);
    setFilteredPlayers(updatedPlayers); // Update filtered players as well
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    // Filter players based on search term
    const filteredPlayers = players.filter(player =>
      player.name.toLowerCase().includes(searchTerm)
    );
    setFilteredPlayers(filteredPlayers);
  };

  return (
    <div>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search players..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {/* Render each player card */}
      {filteredPlayers.map(player => (
        <PlayerCard
          key={player.id}
          player={player}
          onDelete={handleDeletePlayer}
        />
      ))}
    </div>
  );
}

export default AllPlayers;
