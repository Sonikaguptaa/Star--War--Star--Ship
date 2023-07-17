import GetAllStarships from "./Sw-api";

function Shipcard({ data }) {
  // console.log(data);
  return <GetAllStarships data={data} />;
}

export default Shipcard;
