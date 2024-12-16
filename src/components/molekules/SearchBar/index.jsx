import { useState } from "react";
import { Input, Button } from "../../atoms";
import usePlaceStore from "../../../config/placeStore";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ value, onChange }) => {
  const { searchPlaces } = usePlaceStore();
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const results = await searchPlaces(value);
      setSearchResults(results || []);
      console.log(results);
    } catch (error) {
      console.error("Error searching places:", error);
      setSearchResults([]);
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      const results = await searchPlaces(value);
      if (results && results.length > 0) {
        const placeId = results[0]._id;
        navigate(`/review-gambar/${placeId}`);
      }
    }
  };

  return (
    <div className="flex relative">
      <Input
        className="flex-grow w-full shadow-md text-black shadow-zinc-600 border bg-white"
        placeholder="Cari Tempat Nongkrong"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <Button
        onClick={handleSearch}
        className="ml-2 bg-[#c66e4e] shadow-md shadow-zinc-600 text-white"
      >
        Cari
      </Button>
      {Array.isArray(searchResults) && searchResults.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 mt-1 w-full">
          {searchResults.map((result) => (
            <li key={result._id} className="p-2 hover:bg-gray-200 cursor-pointer">
              {result.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
