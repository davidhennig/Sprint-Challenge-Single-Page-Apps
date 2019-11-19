import React, { useEffect, useState } from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import { Route } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchForm from "./components/SearchForm.js";
import axios from "axios";

const WrapperDiv = styled.div`
  h1 {
    color: limegreen;
  }
  h2 {
    font-family: Comic Sans MS;
  }
`;

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setSearchResults(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <WrapperDiv>
      <main>
        <Header />
        <Route
          exact
          path="/SearchForms"
          render={props => <SearchForm {...props} list={searchResults} />}
        />
        <Route
          exact
          path="/"
          render={props => <CharacterList {...props} list={searchResults} />}
        />
        <Route path="/char/:id" component={CharacterCard} />
      </main>
    </WrapperDiv>
  );
}
