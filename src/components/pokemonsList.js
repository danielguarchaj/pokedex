import React, { useEffect, useState } from 'react'
import PokemonCard from './pokemonCard';

const PokemonsList = ({pokemons}) => {

  return (
    <div className="container">
      {
        pokemons.map( (pokemon, index) => (
          <PokemonCard key={index} name={pokemon.name} number={index} />
        ))
      }
    </div>
  );
}

export default PokemonsList
