import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPlayerPage from './pages/AddPlayerPage';
import './App.css';

function App() {
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);

  return (
    <Router>
      <nav>
        <Link to="/">Hem</Link>
        <Link to="/addplayer">Lägg till spelare</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage teamA={teamA} setTeamA={setTeamA} teamB={teamB} setTeamB={setTeamB} />} />
        <Route path="/addplayer" element={<AddPlayerPage teamA={teamA} setTeamA={setTeamA} teamB={teamB} setTeamB={setTeamB} />} />
      </Routes>
    </Router>
  );
}

export default App;