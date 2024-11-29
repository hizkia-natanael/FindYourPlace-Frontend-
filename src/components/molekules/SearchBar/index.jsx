import { Input, Button } from "../../atoms";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex">
      <Input
        className="flex-grow w-full"
        placeholder="Cari Tempat Nongkrong"
        value={value} // Bind the value prop
        onChange={onChange} // Bind the onChange handler
      />
      <Button className="ml-2 bg-[#c66e4e] text-white">Cari</Button>
    </div>
  );
};

export default SearchBar;
