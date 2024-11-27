import { Card } from "../../molekules";

const RatingSection = ({ places }) => {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Rating Bagus</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {places.map((place, index) => (
          <Card key={index} {...place} />
        ))}
      </div>
    </section>
  );
};

export default RatingSection;
