import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 1,
  userDetail: null,
};

export const getUserDetail = createAsyncThunk(
  "account/userDetail",
  async (thunkAPI) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    return response.data;
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1; //immer library used for it.
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserDetail.fulfilled, (state, action) => {
      // here the payload is the response data of that api call
      state.userDetail = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;
