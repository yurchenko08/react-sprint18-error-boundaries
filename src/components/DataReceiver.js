import { useState } from "react";
import { getData } from "../api";

function DataReceiver() {
  const [data, setData] = useState(0);
  return (
    <>
      <div className="data">
        <button onClick={() => setData(getData())}>Get new data</button>
        <div>{data}</div>
      </div>
    </>
  );
}

export default DataReceiver;
