import DataItem from './DataItem';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';
function DataList() {
  return (
    <>
      <div>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <DataItem />
        </ErrorBoundary>
      </div>

      <div>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <DataItem />
        </ErrorBoundary>
      </div>

      <div>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <DataItem />
        </ErrorBoundary>
      </div>
    </>
  );
}

export default DataList;
