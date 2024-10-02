import React from 'react';
import { useParams } from 'react-router-dom';

const PlayerInfoPage = ({ teamA, teamB }) => {
  const { username } = useParams();
  const player = [...teamA, ...teamB].find((p) => p.username === username);

  if (!player) {
    return <div>Spelare inte hittad</div>;
  }

  return (
    <div>
      <h1>{player.firstName} {player.lastName}</h1>
      <img src={`/images/${player.profileImage}`} alt="Profilbild" />
      <p>Användarnamn: {player.username}</p>
      <p>Ålder: {player.age}</p>
      <p>Land: {player.country}</p>
      <p>Ranking: {player.ranking}</p>
    </div>
  );
};

export default PlayerInfoPage;