import HealthBar from "./HealthBar";


export default function BattlePokemon(props) {
  return <div className={props.className}>
    <h2>{props.pokemonObject.name}</h2>
    <img height="200" src={props.pokemonObject.images.front} alt=""></img>
    <h2>{props.pokemonObject.hp}/{props.pokemonObject.maxHp}</h2>
    <HealthBar pokemonObject={props.pokemonObject}></HealthBar>
  </div>
}