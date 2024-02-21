import { useState, useEffect } from "react";
import "./App.css";
import Cities from "./components/CityLocations";
import Areas from "./components/Areas";
import Pokemon from "./components/Pokemon";
import FirstPage from "./components/FirstPage";

function App() {
  const [locations, setLocations] = useState([]);
  const [linkAreas, setLinkAreas] = useState(null);
  const [pokemons, setPokemons] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/location");
      const data = await response.json();
      setLocations(data.results);
    }
    fetchData();
  }, []);

  console.log(pokemons);
  const [selectedUserPokemon, setSelectedUserPokemon] = useState(null);
  const [selectedAreaPokemon, setSelectedAreaPokemon] = useState(null);

  console.log(selectedUserPokemon);
  console.log(selectedAreaPokemon);
  return (
    <div className="App">
      {pokemons ? (
        <>
          <Pokemon
            encounter={pokemons}
            setSelectedUserPokemon={setSelectedUserPokemon}
            setSelectedAreaPokemon={setSelectedAreaPokemon}
          />
          {selectedAreaPokemon && selectedUserPokemon ? (
            <button>Fight!</button>
          ) : (
            <h2>Please Chose Your Pokemon!</h2>
          )}
        </>
      ) : (
        <FirstPage
          locations={locations}
          linkAreas={linkAreas}
          setPokemons={setPokemons}
          setLinkAreas={setLinkAreas}
        />
      )}
    </div>
  );
}

export default App;
