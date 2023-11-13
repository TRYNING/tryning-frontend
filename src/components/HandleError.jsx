export function HandleError({ children, hasError }) {
  if (hasError) return <h1>Error</h1>;
  return children;
}
