function GetAllStarships({ data }) {
  return data.map((oneShip) => {
    console.log(oneShip);
    return (
      <div key={crypto.randomUUID()} className="Shipcard">
        <h1>{oneShip.name}</h1>
        <h3>Model: {oneShip.model}</h3>
        <h3>MFG: {oneShip.manufacturer}</h3>
        <h3>Speed: {oneShip.max_atmosphering_speed}</h3>
        <h3>Crew: {oneShip.crew}</h3>
        <h3>PAX: {oneShip.passengers}</h3>
      </div>
    );
  });
}
export default GetAllStarships;
