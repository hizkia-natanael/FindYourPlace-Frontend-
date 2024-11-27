import { Link } from "react-router-dom";
import { Button } from "../../components/atoms";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold ">404 - Page Not Found</h1>
      <Button className="bg-[#c66e4e] text-white mt-4">
        <Link to={"/"}>Back To Home</Link>
      </Button>
    </div>
  );
};
export default NotFound;
