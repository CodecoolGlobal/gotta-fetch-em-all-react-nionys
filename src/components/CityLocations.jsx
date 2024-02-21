import IMAGES from "./pokemon-locations/loc";

function Cities(props) {
  return (
        <div className="locationBox" onClick={props.click}>
          <img src={IMAGES[props.index]} alt={props.url}></img>
          <h3>{props.name}</h3>
        </div>
  );
}

export default Cities;
