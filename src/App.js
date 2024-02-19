import { useSelector } from "react-redux";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import Reward from "./components/Reward";

function App() {
  //here the name is used which you provide at the time of reducers allocation in the store
  const amount = useSelector((state) => state.account.amount);
  return (
    <div className="App">
      <h1>App Compoent</h1>
      <div style={{ marginBottom: "2rem" }} />

      <h2>Account Balance :- ${amount} </h2>
      <div style={{ marginBottom: "1rem" }} />

      <h3>Bonus Points :- </h3>
      {/* components */}
      <div style={{ marginBottom: "2rem" }} />
      <Account />
      <div style={{ marginBottom: "2rem" }} />
      <Bonus />
      <div style={{ marginBottom: "2rem" }} />
      <Reward />
    </div>
  );
}

export default App;
