
import ContenedorCards from './Components/ContenedorCards/ContenedorCards'
import './App.css'
import { useEffect, useState } from 'react';
import { fetchAllPokemon } from './API/pokeapi'

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PokemonLogo from './Components/PokemonLogo/PokemonLogo';

const introSong = ['Tengo que ser siempre el mejor!!!','mejor que nadie más...','atraparlos mi prueba es... ', 'entrenarlos mi ideal !!!']

function App() {
  const [data, setData] =useState([])
  const [counter, setCounter]= useState(0)
  const [textCounter, setTextCounter]=useState('')
  
  const getAllPokemons = () => fetchAllPokemon(1).then((response)=>{
    setData(response);
  }).catch((error)=>
  console.log(error))

  useEffect(()=>{
    if(counter >8){
      setTextCounter('...')
      getAllPokemons();
    }else{
      setTextCounter(introSong[parseInt(counter/2)])
    }
    while (counter<=8) {
      const interval = setInterval(()=>{
        setCounter(counter+2)
      }, 2000);
      return () => {
        clearInterval(interval);
      };
    } 
  },[counter])
  
  return (
    <div className='body'>
      <PokemonLogo></PokemonLogo>
      {
        data.length > 0  ?
        <ContenedorCards data={data}></ContenedorCards>
        :<Box sx={{ display: 'flex', width:'100%', justifyContent:'center' }}>
        <Typography sx={{fontFamily:'Comfortaa', fontSize: '7em',color:'#fff', width: '100%', margin: 'auto'}} align="center" gutterBottom variant="h2" component="h2">
        {textCounter}
        </Typography>
      </Box> 
      }
    </div>
  );
}

export default App;


