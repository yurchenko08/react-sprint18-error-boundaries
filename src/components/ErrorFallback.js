function ErrorFallback({ resetErrorBoundary }) {
  return (
    <div>
      <div>Something went wrong:</div>
      <div>"💥Noooo!💥"</div>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default ErrorFallback;
