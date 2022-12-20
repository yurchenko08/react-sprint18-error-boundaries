import { useState } from 'react';
import { getData } from '../api';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

function DataReceiver() {
  const [data, setData] = useState(0);
  const handleError = useErrorHandler();
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className='data'>
        <button
          onClick={() => {
            try {
              setData(getData());
            } catch (e) {
              handleError(e);
            }
          }}
        >
          Get new data
        </button>
        <div>{data}</div>
      </div>
    </ErrorBoundary>
  );
}

export default DataReceiver;
