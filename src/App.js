import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

function App() {
  return (
    <div className="App">
      <h1>App Compoent</h1>
      <div style={{ marginBottom: "2rem" }} />

      <h2>Account Balance :- </h2>
      <div style={{ marginBottom: "1rem" }} />

      <h3>Bonus Points :- </h3>
      {/* components */}
      <div style={{ marginBottom: "2rem" }} />
      <Account />
      <div style={{ marginBottom: "2rem" }} />
      <Bonus />
    </div>
  );
}

export default App;
