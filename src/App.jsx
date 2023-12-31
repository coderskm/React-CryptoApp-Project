import { useEffect, useState } from "react";
import "./App.css";
import Coincard from "./components/Coincard";

function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [name, setName] = useState("");

  const url = import.meta.env.VITE_API_URL;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": import.meta.env.VITE_API_KEY,
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setCoinsList(data.result))
      .catch((err) => console.log(err));
  });

  const filteredCoins = coinsList?.filter((coin) => {
    return coin.name.toLowerCase().includes(name.trim().toLowerCase());
  });

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
          filteredCoins?.map((coin) => <Coincard key={coin.id} coin={coin} />)
        )}
      </div>
    </>
  );
}

export default App;
