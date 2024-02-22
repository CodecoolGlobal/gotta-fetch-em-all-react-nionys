import React from "react";
import PokeImage from "./Pokeimg";
import NotFound from "./NotFound";
import ImageSlider from "./ImageSlider";

function Pokemon(props) {
  const areaPokemons = props.areaPokemons;
  const userPokemons = props.userPokemons;
  const setSelectedUserPokemon = props.setSelectedUserPokemon;
  const setSelectedAreaPokemon = props.setSelectedAreaPokemon;
  return (
    <div className="pokemonSlider">
      <div className="userPokemonSlider">
        <h3>Your Pokemons</h3>
        {/*         {userPokemons.map((pokemon, index) => (
          <PokeImage
            key={index}
            pokemon={pokemon}
            direction="front_default"
            setSelectedPokemon={setSelectedUserPokemon}
          />
        ))} */}
        {<ImageSlider pokemon={userPokemons} setSelectedPokemon={setSelectedUserPokemon} />}
      </div>
      <div className="areaPokemonSlider">
        <h3>Enemy Pokemons</h3>
{/*         {areaPokemons ? (
          areaPokemons.map((pokemon, index) => (
            <PokeImage
              key={index}
              pokemon={pokemon}
              direction="front_default"
              setSelectedPokemon={setSelectedAreaPokemon}
            />
          ))
        ) : (
          <NotFound />
        )} */}
        {<ImageSlider pokemon={areaPokemons} setSelectedPokemon={setSelectedAreaPokemon}/>}
      </div>
    </div>
  );
}

export default Pokemon;
