import React from "react";
import PokeImage from "./Pokeimg";

function Pokemon(props) {
  console.log(props.encounter);
  const usersPokemon = [
    "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/poliwhirl",
  ];
  const areaPokémon = props.encounter;
  const setSelectedUserPokemon = props.setSelectedUserPokemon;
  const setSelectedAreaPokemon = props.setSelectedAreaPokemon;
  return (
    <div>
        <div className="userPokémon">
      {usersPokemon.map((link, index) => (
        <PokeImage key={index} link={link} direction='back_default' setSelectedPokemon={setSelectedUserPokemon} />
      ))}
        </div>
        <div className="areaPokémon">
        {areaPokémon&&areaPokémon.map((pokemon, index) => (
        <PokeImage key={index} link={pokemon.pokemon.url} direction='front_default' setSelectedPokemon={setSelectedAreaPokemon} />
      ))}
        </div>
    </div>
  );
}

export default Pokemon;
