import { useState, useEffect } from "react";

 async function fetchAreasPokemons(pokemon_encounters) {
  const areaPokemons = [];
  for (const poke of pokemon_encounters){
    const res = await fetch(poke.pokemon.url);
    const pokemonData = await res.json();
    areaPokemons.push(pokemonData)
  }
  return areaPokemons
  }
 


function Areas(props) {
  const [areas, setAreas] = useState([]);
  const [linkPokemons, setLinkPokemons] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(props.url);
      const data = await response.json();
      setAreas(data.areas);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(linkPokemons);
      const data = await response.json();
      const areaPokemons = await fetchAreasPokemons(data.pokemon_encounters)
      props.setPokemons(areaPokemons);
    }
    fetchData();
  }, [linkPokemons]);

  return (
    <div>
      {areas.map((area) => (
        <div className="areaBox" onClick={() => setLinkPokemons(area.url)}>
          <h1>{area.name}</h1>
        </div>
      ))}
      <button onClick={() => props.setLinkAreas(null)}>Back </button>
    </div>
  );
}

export default Areas;
