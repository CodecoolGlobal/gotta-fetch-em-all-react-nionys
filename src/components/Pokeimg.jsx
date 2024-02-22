function PokeImage(props) {
  const pokemon = props.pokemon;
  return <div> <img
      src={pokemon?.sprites.other.showdown[props.direction]}
      alt={pokemon?.name}
      onClick={()=>{props.setSelectedPokemon(pokemon)}}/>
      <h4>{pokemon?.name}</h4>
    </div>

}

export default PokeImage;
