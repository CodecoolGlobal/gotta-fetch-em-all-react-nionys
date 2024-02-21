import { useEffect, useState } from 'react';
import "./App.css";
import Pokemon from "./components/Pokemon";
import FirstPage from "./components/FirstPage";
import Battle from './components/Battle';

async function fetchPokemon(id) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await data.json();
  return pokemon;
}

async function fetchPokemons(myPokemonId, enemyPokemonId, setMyPokemon, setEnemyPokemon) {
  setMyPokemon(await fetchPokemon(myPokemonId));
  setEnemyPokemon(await fetchPokemon(enemyPokemonId));
}

function App() {
  
  const [locations, setLocations] = useState([]);
  const [linkAreas, setLinkAreas] = useState(null);
  const [pokemons, setPokemons] = useState(null);

  const [selectedUserPokemon, setSelectedUserPokemon] = useState(null);
  const [selectedAreaPokemon, setSelectedAreaPokemon] = useState(null);

  const [myPokemon, setMyPokemon] = useState(null);
  const [enemyPokemon, setEnemyPokemon] = useState(null);
  const [battle, setBattle] = useState({state: "not started", round: 1});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/location");
      const data = await response.json();
      setLocations(data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {(myPokemon && enemyPokemon)
      ? (<Battle
        myPokemon={myPokemon}
        enemyPokemon={enemyPokemon}
        battle={battle}
        setBattle={setBattle}></Battle>)
      : (pokemons ? (
        <>
          <Pokemon
            encounter={pokemons}
            setSelectedUserPokemon={setSelectedUserPokemon}
            setSelectedAreaPokemon={setSelectedAreaPokemon}
          />
          {selectedAreaPokemon && selectedUserPokemon ? (
            <button onClick={() => fetchPokemons(selectedUserPokemon.name, selectedAreaPokemon.name, setMyPokemon, setEnemyPokemon)}>Fight!</button>
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
      ))}
    </div>
  );
}

export default App;
