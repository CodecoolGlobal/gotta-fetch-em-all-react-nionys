function PokeImage(props) {
  const pokemon = props.pokemon;
  return <img
      src={pokemon?.sprites.other.showdown[props.direction]}
      alt={pokemon?.name}
      onClick={()=>{props.setSelectedPokemon(pokemon)}}/>
}

export default PokeImage;
