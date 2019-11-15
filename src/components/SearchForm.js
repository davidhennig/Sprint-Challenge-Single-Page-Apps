import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(props.list);

  useEffect(() => {
    const results = props.list.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  useEffect(() => {
    setSearchResults(props.list);
  }, [props.list]);

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
              <li key={character.id}>{character.name}</li>
            ))}
          </ul>
        </div>
      </div>
      );
    </section>
  );
}
