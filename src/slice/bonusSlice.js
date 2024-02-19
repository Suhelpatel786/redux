import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 1,
};
const incrementByAmount = createAction("account/incrementByAmount");

export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1; //immer library used for it.
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, action) => {
      //when the below condition will fulfiled it will 1 in points current value
      if (action.payload >= 100) {
        state.points += 1;
      }
      return state;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;
