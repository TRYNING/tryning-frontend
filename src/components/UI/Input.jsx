export const Input = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col w-full">
      {label && <label className="text-semibold mb-1 text-md">{label}</label>}
      <input
        type={type}
        className="shadow-sm py-3 px-3 bg-white border text-sm focus:border-gray-400 rounded-xl"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
