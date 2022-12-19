import { getData } from "../api";

function DataItem() {
  return (
    <div className="data">
      <p>
        <b>Data received:</b>
      </p>
      <div>{getData()}</div>
    </div>
  );
}

export default DataItem;
