import React from "react";
import PokeImage from "./Pokeimg";

// async function fetchPokemon(id) {
//   const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//   const pokemon = await data.json();
//   return pokemon;
// }
// async function fetchPokemons(myPokemonId, enemyPokemonId, setMyPokemon, setEnemyPokemon) {
//   setMyPokemon(await fetchPokemon(myPokemonId));
//   setEnemyPokemon(await fetchPokemon(enemyPokemonId));
// }



function Pokemon(props) {
  const areaPokemons = props.areaPokemons;
  const userPokemons = props.userPokemons;
  const setSelectedUserPokemon = props.setSelectedUserPokemon;
  const setSelectedAreaPokemon = props.setSelectedAreaPokemon;
  return (
    <div>
      <div className="userPokémon">
        {userPokemons&&userPokemons.map((pokemon, index) => (
          <PokeImage key={index} pokemon={pokemon} direction='back_default' setSelectedPokemon={setSelectedUserPokemon} />
      ))}
      </div>
      <div className="areaPokémon">
        {areaPokemons&&areaPokemons.map((pokemon, index) => (
          <PokeImage key={index} pokemon={pokemon} direction='front_default' setSelectedPokemon={setSelectedAreaPokemon} />
    ))}
      </div>
    </div>
  );
}

export default Pokemon;
