import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Character } from "../types/CharacterTypes";

function DetailPage() {
    // const dasWasInDerUrlSteht = useParams();
    // console.log(dasWasInDerUrlSteht);
// - shorter with destructuring:
    const {id} = useParams();
    console.log(id);
    
    const [character, setCharacter] = useState<Character | null>(null);

    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => res.json())
        .then((data) => setCharacter(data))
        .catch((err) => console.log(err));
    }, [id]);
  
    if (!character) {
      return <p>Loading...</p>;
    }
  
    return (
      <>
        <h2>Name: {character.name}</h2>
        <p>Gender: {character.gender}</p>
        <p>Species: {character.species} </p>
        <p>Status: {character.status}</p>
      </>
    );
  }
  
  export default DetailPage;
  
