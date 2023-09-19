export function Input({
  onChange,
  placeholder,
  type = "text",
  name = "name",
  label,
  littleInput = false,
  checked,
  value,
  required = false,
}) {
  if (type === "radio")
    return (
      <label className="flex items-center gap-5 mt-20">
        <input
          className="appearance-none w-20 h-20 border-1 border-secondary rounded-full outline-none cursor-pointer"
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
          name={name}
          required={required}
        />
        {label}
      </label>
    );
  return (
    <div className={`flex flex-col ${!littleInput ? "flex-1" : "w-1/2"}`}>
      <label className="text-semibold mb-1 text-md">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        name={name}
        className="shadow-sm py-3 px-3 bg-white border text-sm focus:border-gray-400 rounded-xl"
        required={required}
      />
    </div>
  );
}
