import React, { useState } from 'react';

const AddPlayerPage = ({ addPlayer }) => {
  const [playerData, setPlayerData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    age: '',
    country: '',
    ranking: 'Nybörjare',
    profileImage: 'default1.png',
  });

  const handleChange = (e) => {
    setPlayerData({ ...playerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(playerData);
    setPlayerData({
      username: '',
      firstName: '',
      lastName: '',
      age: '',
      country: '',
      ranking: 'Nybörjare',
      profileImage: 'default1.png',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Användarnamn" value={playerData.username} onChange={handleChange} />
      <input type="text" name="firstName" placeholder="Förnamn" value={playerData.firstName} onChange={handleChange} />
      <input type="text" name="lastName" placeholder="Efternamn" value={playerData.lastName} onChange={handleChange} />
      <input type="number" name="age" placeholder="Ålder" value={playerData.age} onChange={handleChange} />
      <input type="text" name="country" placeholder="Land" value={playerData.country} onChange={handleChange} />
      <select name="ranking" value={playerData.ranking} onChange={handleChange}>
        <option value="Nybörjare">Nybörjare</option>
        <option value="Amatör">Amatör</option>
        <option value="Duktig">Duktig</option>
        <option value="Erfaren">Erfaren</option>
        <option value="Proffs">Proffs</option>
      </select>
      <select name="profileImage" value={playerData.profileImage} onChange={handleChange}>
        <option value="default1.png">Bild 1</option>
        <option value="default2.png">Bild 2</option>
        <option value="default3.png">Bild 3</option>
      </select>
      <button type="submit">Lägg till spelare</button>
    </form>
  );
};

export default AddPlayerPage;