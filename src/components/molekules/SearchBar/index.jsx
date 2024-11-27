import { Input, Button } from "../../atoms";

const SearchBar = () => {
  return (
    <div className="flex">
      <Input className="flex-grow" placeholder="Cari Tempat Nongkrong" />
      <Button className="ml-2 bg-[#c66e4e] text-white">Cari</Button>
    </div>
  );
};

export default SearchBar;
