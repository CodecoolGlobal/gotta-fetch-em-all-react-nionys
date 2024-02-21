import { useEffect, useState } from 'react';
import "./App.css";
import Pokemon from "./components/Pokemon";
import FirstPage from "./components/FirstPage";
import BattlePage from './components/BattlePage';

function App() {
  const [locations, setLocations] = useState([]);
  const [linkAreas, setLinkAreas] = useState(null);
  const [pokemons, setPokemons] = useState(null);

  const [selectedUserPokemon, setSelectedUserPokemon] = useState(null);
  const [selectedAreaPokemon, setSelectedAreaPokemon] = useState(null);

  const [battleReady, setBattleReady] = useState(false);

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
      {battleReady
      ? <BattlePage
        myPokemon={selectedUserPokemon}
        enemyPokemon={selectedAreaPokemon}
        battleReady={battleReady}
        setBattleReady={setBattleReady}/>
      : (pokemons ? (
        <>
          <Pokemon
            encounter={pokemons}
            setSelectedUserPokemon={setSelectedUserPokemon}
            setSelectedAreaPokemon={setSelectedAreaPokemon}
          />
          {selectedAreaPokemon && selectedUserPokemon ? (
            <button onClick={() => setBattleReady(true)}>Fight!</button>
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
