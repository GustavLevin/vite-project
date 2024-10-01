import React from 'react';
import PlayerList from '../components/PlayerList';

const HomePage = ({ teamA, setTeamA, teamB, setTeamB }) => {
  const removePlayerFromTeam = (team, setTeam, playerName) => {
    setTeam(team.filter((player) => player !== playerName));
  };

  const movePlayer = (fromTeam, setFromTeam, toTeam, setToTeam, playerName) => {
    if (toTeam.length < 5) {
      setFromTeam(fromTeam.filter((player) => player !== playerName));
      setToTeam([...toTeam, playerName]);
    }
  };

  return (
    <div>
      <PlayerList
        teamName="Lag A"
        players={teamA}
        removePlayer={(player) => removePlayerFromTeam(teamA, setTeamA, player)}
        movePlayer={(player) => movePlayer(teamA, setTeamA, teamB, setTeamB, player)}
        canMove={teamB.length < 5}
      />
      <PlayerList
        teamName="Lag B"
        players={teamB}
        removePlayer={(player) => removePlayerFromTeam(teamB, setTeamB, player)}
        movePlayer={(player) => movePlayer(teamB, setTeamB, teamA, setTeamA, player)}
        canMove={teamA.length < 5}
      />
    </div>
  );
};

export default HomePage;