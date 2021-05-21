
import React, { useEffect, useState } from 'react'

import logo from "./logo.svg";
import "./App.css";
import PokemonsList from "./components/pokemonsList";
import PokemonDetailCard from "./components/pokemonDetailCard";
import PokemonSearch from "./components/pokemonSearch";

function App() {

  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
      setPokemons(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const [pokemon, setPokemon] = useState({});

  const handleChangePokemon = newPokemon => {
    setPokemon(newPokemon);
  }

  useEffect( () => {
    getPokemons();
  }, [])

  return (
    <div>
      <h1>Listado de pokemons</h1>
      <div className="container">
        <div className="list-container">
          <PokemonSearch />
          <PokemonsList pokemons={pokemons} handleShowDetail={handleChangePokemon} />
        </div>
        <div className="detail-container">
          <PokemonDetailCard pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
}

export default App;
