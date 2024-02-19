import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";

//reducers

import accountReducer from "./slice/accountSlice";
import bonusReducer from "./slice/bonusSlice";
import { Provider } from "react-redux";
import rewardReducer from "./reducers/rewardReducers";

//store configuration

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    reward: rewardReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
