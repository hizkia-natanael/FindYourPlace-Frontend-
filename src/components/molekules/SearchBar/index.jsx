import { Input, Button } from "../../atoms";

const SearchBar = () => {
  return (
    <div className="flex">
      <Input
        className="flex-grow w-full shadow-xl shadow-zinc-600 border border-black"
        placeholder="Cari Tempat Nongkrong"
      />
      <Button className="ml-2 bg-[#c66e4e] shadow-xl shadow-zinc-600 text-white">
        Cari
      </Button>
    </div>
  );
};

export default SearchBar;
