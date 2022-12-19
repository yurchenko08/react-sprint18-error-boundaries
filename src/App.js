import './App.css';
import DataList from './components/DataList';
import DataReceiver from './components/DataReceiver';

function App() {
  console.log('render');

  return (
    <div className='App'>
      <DataList />
      <DataReceiver />
    </div>
  );
}

export default App;
