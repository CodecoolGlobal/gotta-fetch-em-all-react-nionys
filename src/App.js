import { useState, useEffect } from "react";
import "./App.css";
import Cities from "./components/cityLocations";
import Areas from "./components/areas";

function App() {
  const [locations, setLocations] = useState([]);
  const [linkAreas, setLinkLocations] = useState(null);
  const [pokemons, setPokemons] = useState(null);
 //const [linkPokemons, setLinkPokemons] = useState(null)
  //const [areas, setAreas] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/location");
      const data = await response.json();
      setLocations(data.results);
    }
    fetchData();
  }, []);

  console.log(pokemons);
  return (
    <div className="App">
      {linkAreas ? (
        <Areas url={linkAreas}
       setPokemons={setPokemons} />
      ) : (
        locations.map((city, index) => (
          <Cities
            url={city.url}
            index={index}
            name={city.name}
            click={() => setLinkLocations(city.url)}
          />
        ))
      )}
    </div>
  );
}

export default App;
