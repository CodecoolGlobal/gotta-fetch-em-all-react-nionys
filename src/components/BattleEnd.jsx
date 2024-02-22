function returnToAreas(setBattleReady, setAreaPokemons, setSelectedUserPokemon, setSelectedAreaPokemon) {
  setBattleReady(false);
  setAreaPokemons(null);
  setSelectedUserPokemon(null);
  setSelectedAreaPokemon(null);
}

export default function BattleEnd(props) {
  return <div>
    <p>
      {`${props.battle.loser} fainted!
      ${props.battle.winner} wins!`}
    </p>
    {/^your /.test(props.battle.winner) && <p>{props.selectedAreaPokemon.name} has been added to your pokéballs!</p>}
    <button onClick={() => {returnToAreas(
      props.setBattleReady,
      props.setAreaPokemons,
      props.setSelectedUserPokemon,
      props.setSelectedAreaPokemon,
    )}}>Return</button>
  </div>
}