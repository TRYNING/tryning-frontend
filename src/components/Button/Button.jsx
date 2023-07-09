export function Button({
  type = "button",
  className,
  children,
  onClick = () => {},
}) {
  return (
    <button type={type} className={className} onClick={(e) => onClick(e)}>
      {children}
    </button>
  );
}
