import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = CharacterList.filter(character =>
      character.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="search-form">
      <div className="App">
        <form>
          <label htmlFor="name">Search:</label>
          <input
            id="name"
            type="text"
            name="textfield"
            placeholder="Search"
            onChange={handleChange}
            value={searchTerm}
          />
        </form>
        <div className="character-list">
          <ul>
            {searchResults.map(character => (
              <li key={character}>{character}</li>
            ))}
          </ul>
        </div>
      </div>
      );
    </section>
  );
}
