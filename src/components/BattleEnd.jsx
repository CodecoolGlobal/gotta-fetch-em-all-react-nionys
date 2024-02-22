function returnToAreas(setBattleReady, setAreaPokemons, setSelectedUserPokemon, setSelectedAreaPokemon) {
  setBattleReady(false);
  setAreaPokemons(null);
  setSelectedUserPokemon(null);
  setSelectedAreaPokemon(null);
}

export default function BattleEnd(props) {
  return <div className="BattleEnd">
    <p>
      {`${props.battle.loser} fainted!
      ${props.battle.winner} wins!`}
    </p>
    {/^your /.test(props.battle.winner) && <p>{props.selectedAreaPokemon.name} has been added to your pokéballs!</p>}
    <button className="button-85" onClick={() => {returnToAreas(
      props.setBattleReady,
      props.setAreaPokemons,
      props.setSelectedUserPokemon,
      props.setSelectedAreaPokemon,
    )}}>Return</button>
  </div>
}