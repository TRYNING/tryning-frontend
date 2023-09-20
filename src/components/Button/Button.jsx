export function Button({
  type = "button",
  number = 1,
  children,
  onClick = () => {},
}) {
  let className;
  switch (number) {
    case 1:
      className = "bg-[var(--color-primary)] text-gray-100";
      break;

    case 2:
      className = "bg-[var(--color-white)] text-[var(--color-primary)]";
      break;

    case 3:
      className = "flex items-center justify-center bg-[var(--color-white)]";
      break;
  }
  return (
    <button
      type={type}
      className={`${className} shadow-md border border-[var(--color-primary)] rounded-full h-10 w-full text-sm font-semibold hover:opacity-90 hover:scale-101`}
      onClick={(e) => onClick(e)}
    >
      {children}
    </button>
  );
}
