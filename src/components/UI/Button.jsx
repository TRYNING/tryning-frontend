import classNames from "classnames";

export const Button = ({ type, children, onClick }) => {
  const buttonClasses = classNames(
    " shadow-md rounded-full h-10 w-full text-sm font-semibold hover:opacity-90 hover:scale-101 flex justify-center items-center",
    {
      "bg-[var(--color-primary)] text-white": type === "primary",
      "bg-transparent text-[var(--color-primary)] border border-[var(--color-primary)]":
        type === "secondary",
    }
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};
