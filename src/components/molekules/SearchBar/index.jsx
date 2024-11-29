import { Input, Button } from "../../atoms";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex">
      <Input
<<<<<<< HEAD
        className="flex-grow w-full shadow-xl shadow-zinc-600 border border-black"
        placeholder="Cari Tempat Nongkrong"
      />
      <Button className="ml-2 bg-[#c66e4e] shadow-xl shadow-zinc-600 text-white">
        Cari
      </Button>
=======
        className="flex-grow w-full"
        placeholder="Cari Tempat Nongkrong"
        value={value} // Bind the value prop
        onChange={onChange} // Bind the onChange handler
      />
      <Button className="ml-2 bg-[#c66e4e] text-white">Cari</Button>
>>>>>>> d7ca3dd9d69142c5cfd64f37a81672d2efc53e14
    </div>
  );
};

export default SearchBar;
