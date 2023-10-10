export function Button({
  type = "button",
  number = 1,
  children,
  onClick = () => {},
}) {
  let className;
  switch (number) {
    case 1:
      className =
        "bg-[var(--color-primary)] text-gray-100 border-[var(--color-primary)]";
      break;

    case 2:
      className =
        "bg-[var(--color-white)] text-[var(--color-primary)] border-[var(--color-primary)]";
      break;

    case 3:
      className =
        "flex items-center justify-center bg-[var(--color-white)] border-[var(--color-primary)]";
      break;
    case 4:
      className =
        "flex items-center justify-center text-white bg-[var(--color-primary-trainer)] border-[var(--color-primary-trainer)]";
      break;
    case 5:
      className =
        "flex items-center justify-center  bg-[var(--color-white)] border-[var(--color-primary-trainer)]";
      break;
  }
  return (
    <button
      type={type}
      className={`${className} shadow-md border  rounded-full h-10 w-full text-sm font-semibold hover:opacity-90 hover:scale-101`}
      onClick={(e) => onClick(e)}
    >
      {children}
    </button>
  );
}
