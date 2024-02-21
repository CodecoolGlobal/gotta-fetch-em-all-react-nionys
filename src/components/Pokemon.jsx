import React from "react";
import PokeImage from "./Pokeimg";
import NotFound from "./NotFound";

function Pokemon(props) {
  const usersPokemon = [
    "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/poliwhirl",
  ];
  const areaPokémon = props.encounter;
  const setSelectedUserPokemon = props.setSelectedUserPokemon;
  const setSelectedAreaPokemon = props.setSelectedAreaPokemon;
  return (
    <div className="pokemons">
      <div className="userPokémon">
        <h3>Your Pokemons</h3>
        {usersPokemon.map((link, index) => (
          <PokeImage
            key={index}
            link={link}
            direction="front_default"
            setSelectedPokemon={setSelectedUserPokemon}
          />
        ))}
      </div>
      <div className="areaPokémon">
        <h3>Enemy Pokemons</h3>
        {areaPokémon ?
          areaPokémon.map((pokemon, index) => (
            <PokeImage
              key={index}
              link={pokemon.pokemon.url}
              direction="front_default"
              setSelectedPokemon={setSelectedAreaPokemon}
            />
          )): <NotFound/>}
      </div>
    </div>
  );
}

export default Pokemon;
