import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import './PokemonCard.css'
import { CardContent } from '@mui/material';

export default function PokemonCard(pokemon) {
  console.log('PokemonCardData',pokemon)
  return (
    <Card sx={{ width:'auto'}}>
        <CardHeader
        avatar={
          <Avatar className='avatar' aria-label="recipe">
            {pokemon.pokemon.id}
          </Avatar>
        }
        title={
          <Typography sx={{fontFamily:'Comfortaa', fontSize: '1.2em'}} gutterBottom variant="h5" component="h2">
             {pokemon.pokemon.name.charAt(0).toUpperCase() + pokemon.pokemon.name.slice(1)}
          </Typography>
       }
        />
      <CardMedia
        className='imagen'
        component="img"
        image={pokemon.pokemon.image}
        alt={pokemon.pokemon.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Especies: 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <button class='btn-grad'>Más detalles</button>
      </CardActions>
    </Card>
  );
}