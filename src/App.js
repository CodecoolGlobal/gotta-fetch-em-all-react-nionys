import { useEffect, useState } from 'react';
import './App.css';
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
  const myPokemonId = 1;
  const enemyPokemonId = 4;
  const [myPokemon, setMyPokemon] = useState(null);
  const [enemyPokemon, setEnemyPokemon] = useState(null);
  const [battle, setBattle] = useState({state: "not started", round: NaN, winner: "none"});
  useEffect(() => {
    fetchPokemons(myPokemonId, enemyPokemonId, setMyPokemon, setEnemyPokemon)
  }, []);
  const battleRenderFlag = myPokemon && enemyPokemon;
  return (
    <div className="App">
      {battleRenderFlag && (<Battle
        myPokemon={myPokemon}
        enemyPokemon={enemyPokemon}
        battle={battle}
        setBattle={setBattle}></Battle>)}
    </div>
  );
}

export default App;
