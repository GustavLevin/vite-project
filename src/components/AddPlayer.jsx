// import React, { useState } from "react";

// function AddPlayer({ teamA, setTeamA, teamB, setTeamB }) {
//   const [username, setUsername] = useState("");
//   const [selectedTeam, setSelectedTeam] = useState("A");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (!username.trim()) {
//       setError("Användarnamnet kan inte vara tomt.");
//       return;
//     }

//     if ([...teamA, ...teamB].includes(username)) {
//       setError("Användarnamnet finns redan.");
//       return;
//     }

//     if (selectedTeam === "A" && teamA.length < 5) {
//       setTeamA([...teamA, username]);
//     } else if (selectedTeam === "B" && teamB.length < 5) {
//       setTeamB([...teamB, username]);
//     }

//     setUsername("");
//     setError("");
//   };

//   return (
//     <div>
//       <h1>Lägg till en ny spelare</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Användarnamn"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <select
//           value={selectedTeam}
//           onChange={(e) => setSelectedTeam(e.target.value)}
//         >
//           <option value="A" disabled={teamA.length >= 5}>
//             Lag A
//           </option>
//           <option value="B" disabled={teamB.length >= 5}>
//             Lag B
//           </option>
//         </select>
//         <button type="submit">Lägg till spelare</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }

// export default AddPlayer;

