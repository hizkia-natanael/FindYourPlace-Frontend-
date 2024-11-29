import { Input, Button } from "../../atoms";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex">
      <Input
        className="flex-grow w-full shadow-xl shadow-zinc-600 border bg-white"
        placeholder="Cari Tempat Nongkrong"
        value={value}
        onChange={onChange}
      />
      <Button className="ml-2 bg-[#c66e4e] shadow-xl shadow-zinc-600 text-white">
        Cari
      </Button>
    </div>
  );
};

export default SearchBar;
