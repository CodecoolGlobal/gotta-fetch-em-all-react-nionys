import { useEffect, useState } from "react";

function calcDamage(attack, defense) {
  const z = Math.floor(Math.random()*39)+217;
  return Math.round((2.88*attack/defense + 2 ) * z/255);
}
function playCombatRound(myPokemon, enemyPokemon, battle, setBattle, setMessage, setDisabled, setUserPokemons, selectedAreaPokemon) {
  setMessage(m => m+'\n'+`Round ${battle.round+1}`);

  const enemyFainted = attack(myPokemon, enemyPokemon, setBattle, setMessage, setUserPokemons, selectedAreaPokemon);
  if (enemyFainted) return;

  setDisabled(true);
  setTimeout(() => {
    setDisabled(false);
    const playerFainted = attack(enemyPokemon, myPokemon, setBattle, setMessage, setUserPokemons, selectedAreaPokemon);
    if (playerFainted) return;
    setBattle(b => ({...b, round: b.round+1}));
  }, 0);
//sárkánybaszás
}


function attack(attacker, defender, setBattle, setMessage, setUserPokemons, selectedAreaPokemon) {
  let dmg = calcDamage(attacker.attack, defender.defense);
  defender.hp -= dmg;
  setMessage(m => m+'\n'+`${attacker.name} attacks ${defender.name} for ${dmg} damage!`);
  if (defender.hp <= 0) {
    setBattle({over: true, winner: attacker.name, loser: defender.name});
    if (/^your /.test(attacker.name)) setUserPokemons(uP => [...uP, selectedAreaPokemon]);
    setMessage(m => m+'\n'+`${defender.name} fainted!`);
    return true;
  }
  return false;
}

export default function Battle(props) {
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (props.battle === 0) {
      setMessage('');
    }
  }, [props.battle])

  return <div className="Battle">
    <div className="pokemons">
      <div className="myPokemon">
        <h2>{props.myPokemon.name}</h2>
        <img height="200" src={props.myPokemon.images.front} alt=""></img>
        <h2>{props.myPokemon.hp}/{props.myPokemon.maxHp}</h2>
      </div>
      <div className="enemyPokemon">
        <h2>{props.enemyPokemon.name}</h2>
        <img height="200" src={props.enemyPokemon.images.front} alt=""></img>
        <h2>{props.enemyPokemon.hp}/{props.enemyPokemon.maxHp}</h2>
      </div>
    </div>
    <button disabled={disabled} onClick={
      () => playCombatRound(
        props.myPokemon,
        props.enemyPokemon,
        props.battle,
        props.setBattle,
        setMessage,
        setDisabled,
        props.setUserPokemons,
        props.selectedAreaPokemon,
      )
    }>
      {(props.battle.round === 0) ? "Attack" : "Attack again"}
    </button>
    <div className="battleLog">
      <p>{message}</p>
    </div>
    <button onClick={()=> props.setBattle(0)}>Restart</button>
  </div>;
}