import { useState, useEffect } from "react";
import GetAllStarships from "./components/Sw-api";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    let api = "https://swapi.dev/api/starships/";

    let shipList = await fetch(api);
    const ship = await shipList.json();
    // console.log(shipList);
    setData(ship.results);
    console.log(data);
  }

  return (
    <div className="App">
      <h1 className="ShipTitle">STAR WAR STAR SHIPS</h1>

      <GetAllStarships data={data} />
    </div>
  );
}

export default App;
