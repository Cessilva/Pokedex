import * as React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard'
import './ContenedorCards.css'

export default function ContenedorCards(data) {
  return (
     <div className='grid'>
         {data.data.length > 0 ?
         data.data.map((pokemon)=>{
            return <PokemonCard key={pokemon.name} pokemon={pokemon}></PokemonCard>
         }):
        <div>Holis</div>
        }
    </div>);
}