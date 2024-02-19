import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slice/bonusSlice";

const Bonus = () => {
  const bonus = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Bonus Component</h1>
      <div style={{ marginBottom: "1rem" }} />

      <h2>Bonus points :- {bonus}</h2>
      <div style={{ marginBottom: "1rem" }} />

      <button onClick={() => dispatch(increment())}>Increment Bonus</button>
    </div>
  );
};

export default Bonus;
