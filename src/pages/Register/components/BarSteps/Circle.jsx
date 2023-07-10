export function Circle({ state = false, step }) {
  return (
    <div className={`circle ${state === true && "circle-step"}`}>{step}</div>
  );
}
