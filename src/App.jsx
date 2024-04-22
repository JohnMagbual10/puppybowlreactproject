// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayerCard from './components/PlayerCard';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';
import './App.css';

function App() {
  return (
    <>
      <h1>Puppy Bowl</h1>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players" element={<AllPlayers />} />
        <Route path="/players/:playerId" element={<SinglePlayer />} />
        <Route path="/new-player" element={<NewPlayerForm />} />
      </Routes>
    </>
  );
}

export default App;
