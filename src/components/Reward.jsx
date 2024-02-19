import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../reducers/rewardReducers";
const Reward = () => {
  const points = useSelector((state) => state.reward.points);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Reward Component</h1>
      <div style={{ marginBottom: "1rem" }} />

      <h2>Reward points :- {points}</h2>
      <div style={{ marginBottom: "1rem" }} />

      <button onClick={() => dispatch(increment())}>Increment Reward</button>
    </div>
  );
};

export default Reward;
