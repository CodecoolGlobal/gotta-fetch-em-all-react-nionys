const HUE_GREEN = 120;
const HUE_RED = 0;

function getHue(hue1, hue2, percent) {
  return hue1 + (hue2-hue1)*percent;
} 

export default function HealthBar(props) {
  const ratio = props.pokemonObject.hp/props.pokemonObject.maxHp;
  const hue = getHue(HUE_RED, HUE_GREEN, ratio);
  return <div style={{position: "relative", width: "250px", height: "20px", borderRadius: "10px", backgroundColor: "gray"}}>
    <div style={{position:"absolute", width: `${100*ratio}%`, height: "100%", borderRadius: "10px", backgroundColor: `hsl(${hue}, 100%, 50%)`}}>

    </div>
  </div>
}