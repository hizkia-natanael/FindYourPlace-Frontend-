import { Input, Button } from "../../atoms";

const SearchBar = ({ value, onChange, onClick }) => {
  return (
    <div className="flex">
      <Input
        className="flex-grow w-full shadow-md text-black shadow-zinc-600 border bg-white"
        placeholder="Cari Tempat Nongkrong"
        value={value}
        onChange={onChange}
      />
      <Button
        onClick={onClick}
        className="ml-2 bg-[#c66e4e] shadow-md shadow-zinc-600 text-white"
      >
        Cari
      </Button>
    </div>
  );
};

export default SearchBar;
