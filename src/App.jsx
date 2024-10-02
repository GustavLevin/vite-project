import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPlayerPage from './pages/AddPlayerPage';
import PlayerInfoPage from './pages/PlayerInfoPage';
import './App.css';

function App() {
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);

  const addPlayer = (playerData) => {
    if (teamA.length < 5) {
      setTeamA([...teamA, playerData]);
    } else if (teamB.length < 5) {
      setTeamB([...teamB, playerData]);
    }
  };

  return (
    <Router>
      <nav>
        <Link to="/">Hem</Link>
        <Link to="/addplayer">Lägg till spelare</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage teamA={teamA} teamB={teamB} />} />
        <Route path="/addplayer" element={<AddPlayerPage addPlayer={addPlayer} />} />
        <Route path="/playerinfo/:username" element={<PlayerInfoPage teamA={teamA} teamB={teamB} />} />
      </Routes>
    </Router>
  );
}

export default App;