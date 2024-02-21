import { useState, useEffect } from "react";

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
      props.setPokemons(data.pokemon_encounters);
    }
    fetchData();
  }, [linkPokemons]);

  return (
    <div>
      {areas.map((area, index) => (
        <div key={index} className="areaBox" onClick={() => setLinkPokemons(area.url)}>
          <h1>{area.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default Areas;
