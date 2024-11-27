const Button = (props) => {
  const { children, className, onClick, type } = props;
  return (
    <button
      className={`${className} py-2 px-8  rounded`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;
