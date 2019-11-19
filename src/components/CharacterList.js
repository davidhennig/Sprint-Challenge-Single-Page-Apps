import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // const id = props;
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setChar(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <section className="characterList">
      {char.map(characterList => {
        return (
          <CharacterCard
            key={characterList.name}
            name={characterList.name}
            status={characterList.status}
            species={characterList}
          />
        );
      })}
    </section>
  );
}
