import React, { useEffect, useState } from "react";

const fetchPokemon = async (link) => {
  const response = await fetch(link);
  const pokemon = await response.json();
  return pokemon;
};

function PokeImage(props) {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    fetchPokemon(props.link).then((data) => setPokemon(data));
  }, []);

  return (
    <img
      src={pokemon?.sprites.other.showdown.back_default}
      alt={pokemon?.name}
    ></img>
  );
}

export default PokeImage;
