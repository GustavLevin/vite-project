import React from 'react';
import { Link } from 'react-router-dom';
import PlayerList from '../components/PlayerList';

const HomePage = ({ teamA, teamB }) => {
  return (
    <div>
      <h1>Lag A</h1>
      <PlayerList players={teamA} team="A" />
      <h1>Lag B</h1>
      <PlayerList players={teamB} team="B" />
    </div>
  );
};

export default HomePage;