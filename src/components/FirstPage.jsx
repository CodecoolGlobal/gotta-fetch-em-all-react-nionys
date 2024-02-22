import Areas from "./Areas";
import Cities from "./CityLocations";

function FirstPage(props) {
  return (
    <div>
      {props.linkAreas ? (
        <Areas
          url={props.linkAreas}
          setAreaPokemons={props.setAreaPokemons}
          setLinkAreas={props.setLinkAreas}
        />
      ) : (
          <><h1>Choose your hunting locations</h1><div className="allLocations">
            {props.locations.map((city, index) => (
              <Cities
                url={city.url}
                key={index}
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
