import React, { useState } from "react";

const PokemonCard = ({ imageSource = "", number = "", name = "", url = "" }) => {
  const [pokemon, setPokemon] = useState({});

  const showDetails = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.log(error);
    }
  }

  return <div className="card-container" onClick={showDetails}>
    <img src={imageSource} />
    <p># {number}</p>
    <h4 className="pokemon-name">{name}</h4>
  </div>;
};

export default PokemonCard;
