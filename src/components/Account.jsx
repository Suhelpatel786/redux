import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../slice/accountSlice";

const Account = () => {
  const [account, setAccount] = useState({ amount: 0 });
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();
  const amount = useSelector((state) => state.account.amount);

  return (
    <div>
      <h1>Account Component</h1>
      <div style={{ marginBottom: "1rem" }} />

      <h2>Account :- {amount}</h2>
      <div style={{ marginBottom: "1rem" }} />

      <button onClick={() => dispatch(increment())}>Increment +</button>
      <button onClick={() => dispatch(decrement())}>Decrement -</button>
      <input
        type="number"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />

      <button onClick={() => dispatch(incrementByAmount(value))}>
        Increment Value By Number +
      </button>
    </div>
  );
};

export default Account;
