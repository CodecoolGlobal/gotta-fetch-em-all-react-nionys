import Areas from "./Areas";
import Cities from "./CityLocations";

function FirstPage(props) {
  return (
    <>
      {props.linkAreas ? (
        <Areas url={props.linkAreas} setPokemons={props.setPokemons} />
      ) : (
        props.locations.map((city, index) => (
          <Cities
            url={city.url}
            key={index}
            index={index}
            name={city.name}
            click={() => props.setLinkAreas(city.url)}
          />
        ))
      )}
    </>
  );
}

export default FirstPage;
