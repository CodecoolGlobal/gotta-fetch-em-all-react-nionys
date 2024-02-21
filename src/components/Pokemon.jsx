import React from "react";
import PokeImage from "./Pokeimg";
import NotFound from "./NotFound";

function Pokemon(props) {
  const areaPokemons = props.areaPokemons;
  const userPokemons = props.userPokemons;
  const setSelectedUserPokemon = props.setSelectedUserPokemon;
  const setSelectedAreaPokemon = props.setSelectedAreaPokemon;
  return (
    <div className="pokemons">
      <div className="userPokémon">
        <h3>Your Pokemons</h3>
        {userPokemons.map((pokemon, index) => (
          <PokeImage
            key={index}
            pokemon={pokemon}
            direction="front_default"
            setSelectedPokemon={setSelectedUserPokemon}
          />
        ))}
      </div>
      <div className="areaPokémon">
        <h3>Enemy Pokemons</h3>
        {areaPokemons ?
          areaPokemons.map((pokemon, index) => (
            <PokeImage
              key={index}
              pokemon={pokemon}
              direction="front_default"
              setSelectedPokemon={setSelectedAreaPokemon}
            />
          )): <NotFound/>}
      </div>
    </div>
  );
}

export default Pokemon;
