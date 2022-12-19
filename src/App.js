import "./App.css";
import DataList from "./components/DataList";
import DataReceiverWithBoundary from "./components/DataReceiverWithBoundary";

function App() {
  console.log("render");

  return (
    <div className="App">
      <DataList />
      <DataReceiverWithBoundary />
    </div>
  );
}

export default App;
