import { InfoSection } from "../../molekules";
import { WhatsAppButton } from "../../atoms";

const FindYourPlace = () => {
  return (
    <div className="relative bg-gray-50 min-h-screen flex flex-col items-center justify-center py-10">
      <InfoSection />
      <WhatsAppButton />
      <p className="mt-10 text-lg font-medium italic text-gray-600">
        ~ Temukan Tempat Nongkrong Idealmu ~
      </p>
    </div>
  );
};

export default FindYourPlace;
