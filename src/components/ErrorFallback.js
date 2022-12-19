function ErrorFallback({ resetErrorBoundary }) {
  return (
    <div>
      <p>Something went wrong</p>
      <div>"💥Noooo!💥"</div>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default ErrorFallback;
