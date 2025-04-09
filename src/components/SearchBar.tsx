import { useEffect, useState } from "react";
import { Character } from "../types/CharacterTypes";

type SearchBarProps = {
  characters: Character[];
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
};

function SearchBar({ characters, setCharacters }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  //   console.log("hier der Suchbegriff: ", searchTerm);

  useEffect(() => {
    if (searchTerm.trim().length >= 1) {
      const filteredCharacters = [...characters].filter((characterPizza) =>
        characterPizza.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(filteredCharacters);

      setCharacters(filteredCharacters);
    }
  }, [searchTerm]); //* Der Effekt reagiert immer dann wenn sich der searchTerm ändert

  return (
    <input
      type="text"
      placeholder="Search character..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
