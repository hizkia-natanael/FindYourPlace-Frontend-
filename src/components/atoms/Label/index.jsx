const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-black">
      {children}
    </label>
  );
};

export default Label;
