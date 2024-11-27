import Image from "../../../assets/logo.svg";
const Logo = (props) => {
  const { className } = props;
  return <img src={Image} alt="" className={className} />;
};
export default Logo;
