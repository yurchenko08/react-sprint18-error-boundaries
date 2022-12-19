import DataItem from './DataItem';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';
function DataList() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <DataItem />
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <DataItem />
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <DataItem />
      </ErrorBoundary>
    </>
  );
}

export default DataList;
