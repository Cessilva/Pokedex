import * as React from 'react';
import './PokemonLogo.css'

export default function PokemonLogo(data) {
  console.log('PokemonLogoData', data)
  return (
     <div className='logo'>
         <img src={require('../../Resources/letraPok.png')} alt="LogoPokemon"/>
     </div>
    );
}