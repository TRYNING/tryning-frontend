export function Input({
  onChange,
  placeholder,
  type = "text",
  name = "name",
  className,
  label,
  littleInput = false,
  checked,
  value,
  required= false,
}) {
  if (type === "radio")
    return (
      <label className="container-input-radio">
        <input
          className="input-radio"
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
          name={name}
          required= {required}
        />
        {label}
      </label>
    );
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
        required ={required}
      />
    </div>
  );
}
