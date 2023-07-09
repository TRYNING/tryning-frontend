export function Input({
  onChange,
  placeholder,
  type = "text",
  name = "name",
  className,
  label,
  littleInput = false,
}) {
  return (
    <div
      className={`${littleInput ? "InputLittle-container" : "Input-container"}`}
    >
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        name={name}
        className={className}
      />
    </div>
  );
}
