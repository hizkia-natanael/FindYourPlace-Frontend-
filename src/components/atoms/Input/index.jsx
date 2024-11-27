const Input = (props) => {
  const { type, placeholder, value, onChange, className } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border p-2 rounded w-full ${className}`}
    />
  );
};
export default Input;
