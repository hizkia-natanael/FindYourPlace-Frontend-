const Label = (props) => {
  const { htmlFor, children } = props;
  return <label htmlFor={htmlFor}>{children}</label>;
};
export default Label;
