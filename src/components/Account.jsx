import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../slice/accountSlice";

//api to get the user detail
import { getUserDetail } from "../slice/accountSlice";

const Account = () => {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();
  const amount = useSelector((state) => state.account.amount);
  const userDetail = useSelector((state) => state.account.userDetail);

  console.log({ userDetail });

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

      <button onClick={() => dispatch(getUserDetail())}>
        Get User Details
      </button>
    </div>
  );
};

export default Account;
