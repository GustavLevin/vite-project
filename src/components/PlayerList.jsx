import React from 'react';

const PlayerList = ({ teamName, players, removePlayer, movePlayer, canMove }) => {
  return (
    <div>
      <h2>{teamName}</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player}
            <button onClick={() => removePlayer(player)}>Ta bort</button>
            {canMove && <button onClick={() => movePlayer(player)}>Flytta</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;