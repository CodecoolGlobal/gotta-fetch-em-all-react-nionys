import { useState } from 'react';
import './App.css';
import Pokemon from './pokemon';

function App() {
const[selectedUserPokemon, setSelectedUserPokemon] = useState(null);
const[selectedAreaPokemon, setSelectedAreaPokemon] = useState(null);

console.log(selectedUserPokemon)
console.log(selectedAreaPokemon)
  return (
    <div className="App">
      <Pokemon encounter={test} setSelectedUserPokemon={setSelectedUserPokemon} setSelectedAreaPokemon={setSelectedAreaPokemon}/>
      {selectedAreaPokemon && selectedUserPokemon? <button>Fight!</button>: <h2>Please Chose Your Pokemon!</h2>}
    </div>
  );
}

export default App;
