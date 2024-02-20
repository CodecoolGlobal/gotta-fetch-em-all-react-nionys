import { useEffect, useState } from "react";

function calcDamage(attack, defense) {
  const z = Math.floor(Math.random()*39)+217;
  return Math.floor((4.2*attack/defense + 2 ) * z/255);
}

function createPokemonObject(pokemon) {
  return {
    name: pokemon.name,
    stats: Object.fromEntries(pokemon.stats
      .map(stat => [stat.stat.name, stat.base_stat])
      .filter(([key, value]) => ['attack', 'defense', 'hp'].includes(key))),
  };
}

function attack(myPokemon, enemyPokemon, setBattle) {
  let dmg = calcDamage(myPokemon.stats.attack, enemyPokemon.stats.defense);
  enemyPokemon.stats.hp -= dmg;
  console.log(`Your ${myPokemon.name} attacks ${enemyPokemon.name} for ${dmg} damage!`)
  if (myPokemon.stats.hp <= 0) {
    setBattle(b => {return {state: "over", winner: "enemy"}});
    return;
  }
  dmg = calcDamage(enemyPokemon.stats.attack, myPokemon.stats.defense);
  myPokemon.stats.hp -= dmg;
  console.log(`${enemyPokemon.name} attacks your ${myPokemon.name} for ${dmg} damage!`)
  if (enemyPokemon.stats.hp <= 0) {
    setBattle(b => {return {state: "over", winner: "player"}});
    return;
  }
  setBattle(b => {return {state: "going", round: (b.round??0) + 1}});

}

export default function Battle(props) {

  const [myPokemon, setMyPokemon] = useState(null);
  const [enemyPokemon, setEnemyPokemon] = useState(null);

  useEffect(() => {
    setMyPokemon(createPokemonObject(props.myPokemon));
    setEnemyPokemon(createPokemonObject(props.enemyPokemon));
  }, [props.myPokemon, props.enemyPokemon]);

  return <div className="Battle">
    {(myPokemon && enemyPokemon) && ((props.battle.state === "over")
      ? <p>{props.battle.winner}</p>
      : <div>
          <h2>{myPokemon.name} {myPokemon.stats.hp}</h2>
          <h2>{enemyPokemon.name} {enemyPokemon.stats.hp}</h2>
          <button onClick={() => attack(myPokemon, enemyPokemon, props.setBattle)}>Attack</button>
        </div>)}
  </div>;
}