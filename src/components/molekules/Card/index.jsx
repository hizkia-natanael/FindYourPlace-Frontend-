const Card = ({ image, title, rating }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-orange-500">{rating} ⭐</p>
      </div>
    </div>
  );
};

export default Card;
