const HUE_GREEN = 120;
const HUE_RED = 0;

const WIDTH = 250;
const HEIGHT = 30;
function getHue(hue1, hue2, percent) {
  return hue1 + (hue2-hue1)*percent;
} 

export default function HealthBar(props) {
  const ratio = (props.pokemonObject.hp-1)/props.pokemonObject.maxHp;
  const hue = getHue(HUE_RED, HUE_GREEN, ratio);
  return <div className="HealthBar" style={{width: `${WIDTH}px`, flexBasis: `${HEIGHT}px`, borderRadius: `${HEIGHT/2}px`}}>
    <div style={{width: `${(WIDTH-HEIGHT)*ratio+HEIGHT}px`, borderRadius: `${HEIGHT/2}px`, backgroundColor: `hsl(${hue}, 100%, 50%)`}}></div>
    <h2>{props.pokemonObject.hp} / {props.pokemonObject.maxHp}</h2>
  </div>
}