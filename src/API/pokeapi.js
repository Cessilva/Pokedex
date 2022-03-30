const fetchOnePokemon = async (id) => {
  try {
    console.log('fetchOnePokemon',id);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    console.log(data);
    const pokemon = {
      nombre: data.name,
      altura: data.height,
      peso: data.weight,
      movimientos: data.moves,
      habilidades: data.abilities,
      tipos: data.types,
      ataque: data.stats[1].base_stat,
      defensa: data.stats[2].base_stat,
      especial: data.stats[3].base_stat,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
    };
    return pokemon
  } catch (error) {
    console.log(error);
  }
};
const fetchAllPokemon = async (page) => {
    let url='';
    parseInt(page) === 1  ? url='https://pokeapi.co/api/v2/pokemon/' : url=`https://pokeapi.co/api/v2/pokemon?offset=${(parseInt(page)-1)*20}&limit=20`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      const newDta = data.results.map(element => {
          let generateId=element.url.split('/').filter((el)=>el!=='').pop()
          return {...element, id: generateId, image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${generateId}.png`}
      });
      return {results:newDta, countTotal:parseInt(data.count/20)+1};
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOnePokemonSpecie = async (id) => {
    try {
      console.log('fetchOnePokemonSpecieId',id);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
      const data = await res.json();
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  };


export { fetchOnePokemon, fetchAllPokemon, fetchOnePokemonSpecie};