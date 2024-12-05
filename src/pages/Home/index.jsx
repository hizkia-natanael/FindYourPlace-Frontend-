import { RatingSection } from "../../components/molekules";
import { HeroSection } from "../../components/organisms";
import { FindYourPlace } from "../../components/organisms";
const HomePage = () => {
  return (
    <div className="font-poppins bg-white">
      <HeroSection />
      <div className="mt-8">
        <FindYourPlace />
      </div>
    </div>
  );
};
export default HomePage;
