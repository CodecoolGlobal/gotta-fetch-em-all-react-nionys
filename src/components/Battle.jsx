import { useEffect, useState } from "react";

function calcDamage(attack, defense) {
  const z = Math.floor(Math.random()*39)+217;
  return Math.round((2.88*attack/defense + 2 ) * z/255);
}

function createPokemonObject(pokemon) {
  const stats = Object.fromEntries(pokemon.stats
    .map(stat => [stat.stat.name, stat.base_stat]));
  return {
    name: pokemon.name,
    maxHp: stats.hp,
    hp: stats.hp,
    attack: stats.attack,
    defense: stats.defense,
  };
}

function playCombatRound(myPokemon, enemyPokemon, battle, setBattle, setMessage, setDisabled) {
  setMessage(m => m+'\n'+`Round ${battle.round}`);

  const enemyFainted = attack(myPokemon, enemyPokemon, setBattle, setMessage);
  if (enemyFainted) return;

  setDisabled(true);
  setTimeout(() => {
    setDisabled(false);
    const playerFainted = attack(enemyPokemon, myPokemon, setBattle, setMessage);
    if (playerFainted) return;
    setBattle(b => ({state: "going", round: b.round + 1}));
  }, 0);

}

function attack(attacker, defender, setBattle, setMessage) {
  let dmg = calcDamage(attacker.attack, defender.defense);
  defender.hp -= dmg;
  setMessage(m => m+'\n'+`${attacker.name} attacks ${defender.name} for ${dmg} damage!`);
  if (defender.hp <= 0) {
    setBattle(b => ({state: "over", winner: attacker.name}));
    setMessage(m => m+'\n'+`${defender.name} fainted!`);
    return true;
  }
  return false;
}


export default function Battle(props) {
  const [myPokemon, setMyPokemon] = useState(null);
  const [enemyPokemon, setEnemyPokemon] = useState(null);
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (props.battle.state === 'not started') {
      setMyPokemon(createPokemonObject(props.myPokemon));
      setMyPokemon(p => ({...p, name: `your ${p.name}`}))
      setEnemyPokemon(createPokemonObject(props.enemyPokemon));
      props.setBattle({state: 'not started', round: 1});
      setMessage('');
    }
  }, [props.battle.state]);

  return <div className="Battle">
    {(myPokemon && enemyPokemon) && ((props.battle.state === "over")
      ? <p>Winner: {props.battle.winner}</p>
      : <>
          <div className="pokemons">
            <div className="myPokemon">
              <h2>{myPokemon.name}</h2>
              <img height="200" src={props.myPokemon.sprites.other.showdown.back_default} alt=""></img>
              <h2>{myPokemon.hp}/{myPokemon.maxHp}</h2>
            </div>
            <div className="enemyPokemon">
              <h2>{enemyPokemon.name}</h2>
              <img height="200" src={props.enemyPokemon.sprites.other.showdown.front_default} alt=""></img>
              <h2>{enemyPokemon.hp}/{enemyPokemon.maxHp}</h2>
            </div>
          </div>
          <button disabled={disabled} onClick={
            () => playCombatRound(myPokemon, enemyPokemon, props.battle, props.setBattle, setMessage, setDisabled)
          }>
            {(props.battle.state === "not started") ? "Attack" : "Attack again"}
          </button>
        </>)
        }
    <div className="battleLog">
      <p className>{message}</p>
    </div>
    <button onClick={()=> props.setBattle({state: "not started"})}>Restart</button>
  </div>;
}