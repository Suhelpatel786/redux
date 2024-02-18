import React, { useState } from "react";

const Account = () => {
  const [account, setAccount] = useState({ amount: 0 });
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>Account Component</h1>
      <div style={{ marginBottom: "1rem" }} />

      <h2>Account :- {account.amount}</h2>
      <div style={{ marginBottom: "1rem" }} />

      <button onClick={() => setAccount({ amount: account.amount + 1 })}>
        Increment +
      </button>
      <button onClick={() => setAccount({ amount: account.amount - 1 })}>
        Decrement -
      </button>
      <input
        type="number"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />

      <button onClick={() => setAccount({ amount: account.amount + value })}>
        Increment Value By Number +
      </button>
    </div>
  );
};

export default Account;
