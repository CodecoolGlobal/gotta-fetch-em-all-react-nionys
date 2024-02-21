import { useEffect, useState } from "react";
import BattleEnd from "./BattleEnd";
import Battle from "./Battle";

function createPokemonObject(pokemon) {
  const stats = Object.fromEntries(pokemon.stats
    .map(stat => [stat.stat.name, stat.base_stat]));
  return {
    name: pokemon.name,
    maxHp: stats.hp,
    hp: stats.hp,
    attack: stats.attack,
    defense: stats.defense,
    images: {
      front: pokemon.sprites.other.showdown.front_default,
      back: pokemon.sprites.other.showdown.back_default,
    }
  };
}

export default function BattlePage(props) {
  const [myPokemon, setMyPokemon] = useState(null);
  const [enemyPokemon, setEnemyPokemon] = useState(null);
  const [battle, setBattle] = useState({over: false, round: 0});
  useEffect(() => {
    if (props.battleReady) {
      setMyPokemon(createPokemonObject(props.myPokemon));
      setMyPokemon(p => ({...p, name: `your ${p.name}`}))
      setEnemyPokemon(createPokemonObject(props.enemyPokemon));
      setBattle(0);
    }
  }, [props.battleReady]);
  return <> {myPokemon && enemyPokemon && (battle.over
    ? <BattleEnd/>
    : <Battle myPokemon={myPokemon} enemyPokemon={enemyPokemon} battle={battle} setBattle={setBattle}/>)}
  </>
}