const Card = ({ image, title, rating }) => {
  return (
    <div className=" rounded-lg overflow-hidden  lg:w-[290px] lg:h-[354px] h-[190px] w-[160px] border shadow-xl shadow-zinc-700">
      <img
        src={
          "https://i.pinimg.com/736x/5d/2c/c8/5d2cc8a80f3b8ef152d565701fce9d80.jpg"
        }
        alt={title}
        className=" w-full p-2 object-cover rounded-lg m-auto"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">watu langit jogja cafe</h3>
      </div>
    </div>
  );
};

export default Card;
