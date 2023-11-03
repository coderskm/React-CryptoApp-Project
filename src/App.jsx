import { useEffect, useState } from "react";
import "./App.css";
import Coincard from "./components/Coincard";
function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    fetch(`https://api.coinstats.app/public/v1/coins`)
      .then((response) => response.json())
      .then((data) => setCoinsList(data.coins));
  });
  const filteredCoins = coinsList.filter((coin) => coin.name.toLowerCase().includes(name.trim().toLowerCase()));
  return (
    <>
      <div className="crypto-header">
        <input
          className="input-style"
          type="text"
          placeholder="enter name of coin to search.."
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="crypto-display">
        {filteredCoins.length == 0 ? (
          <p>No Coin Found :(</p>
        ) : (
          filteredCoins.map((coin) => <Coincard key={coin.id} coin={coin} />)
        )}
      </div>
    </>
  );
}

export default App;
