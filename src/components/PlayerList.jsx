import React from 'react';
import { Link } from 'react-router-dom';

const PlayerList = ({ players, team }) => {
  return (
    <ul>
      {players.map((player) => (
        <li key={player.username}>
          <Link to={`/playerinfo/${player.username}`}>
            {player.username}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PlayerList;