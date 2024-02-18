import React, { useState } from "react";

const Bonus = () => {
  const [bonus, setBonus] = useState({ points: 0 });

  return (
    <div>
      <h1>Bonus Component</h1>
      <div style={{ marginBottom: "1rem" }} />

      <h2>Bonus points :- {bonus.points}</h2>
      <div style={{ marginBottom: "1rem" }} />

      <button onClick={() => setBonus({ points: bonus.points + 1 })}>
        Increment Bonus
      </button>
    </div>
  );
};

export default Bonus;
