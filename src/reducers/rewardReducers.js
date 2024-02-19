import { createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction("reward/increment");
const decrement = createAction("reward/decrement");
const incrementByAmount = createAction("reward/incrementByAmount");

const initialState = { points: 0 };

const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.points++;
    })
    .addCase(decrement, (state, action) => {
      state.points--;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.points += action.payload;
    });
});
