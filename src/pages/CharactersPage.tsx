import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Character } from "../types/CharacterTypes";
import Igel from "../components/Igel";
import SearchBar from "../components/SearchBar";

function CharactersPage() {
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        return new Promise<{ results: Character[] }>((resolve) => {
          setTimeout(() => resolve(data), 1500); // Delay of 1500 ms
        });
      })
      .then((data) => {
        // console.log(data);
        // console.log(data.results);
        setCharacters(data.results);
        setAllCharacters(data.results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <SearchBar characters={allCharacters} setCharacters={setCharacters} />
      {isLoading && <Igel />}

      {!isLoading &&
        characters.map((singleCharacter) => (
          <Link
            className="mb-4"
            to={"/characters/" + singleCharacter.id}
            key={singleCharacter.id}
          >
            <h2>{singleCharacter.name}</h2>
            <img src={singleCharacter.image} alt={singleCharacter.name} />
          </Link>
        ))}
    </>
  );
}

export default CharactersPage;
