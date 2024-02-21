import Areas from "./Areas";
import Cities from "./CityLocations";

function FirstPage(props) {
  return (
    <div>
      {props.linkAreas ? (
        <Areas
          url={props.linkAreas}
          setPokemons={props.setPokemons}
          setLinkAreas={props.setLinkAreas}
        />
      ) : (
          <><h1>Choose your hunting locations</h1><div className="allLocations">
            {props.locations.map((city, index) => (
              <Cities
                url={city.url}
                index={index}
                name={city.name}
                click={() => props.setLinkAreas(city.url)} />
            ))}
          </div></>
      )}
    </div>
  );
}

export default FirstPage;
