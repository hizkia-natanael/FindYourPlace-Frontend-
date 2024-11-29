import { Card } from "../../components/molekules";
import { HeroSection } from "../../components/organisms";

const HomePage = () => {
  return (
    <div className="font-poppins">
      <HeroSection />
      <div className="mt-6 px-10 w-full m-auto">
        <div className="mb-4">
          <p className="text-4xl font-bold text-coklate">Rating Bagus</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 m-auto justify-center gap-7 items-center mb-6">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
