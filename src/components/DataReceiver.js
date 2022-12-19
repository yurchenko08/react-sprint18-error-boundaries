import { useState } from 'react';
import { getData } from '../api';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

function DataReceiver() {
  const [data, setData] = useState(0);
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className='data'>
        <button onClick={() => setData(getData())}>Get new data</button>
        <div>{data}</div>
      </div>
    </ErrorBoundary>
  );
}

export default DataReceiver;
