import React from "react";

const CharacterCard = props => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Status: {props.status}</h2>
      <h3>Species: {props.species.species}</h3>
    </>
  );
};

export default CharacterCard;
