import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import  SimpleDialog from '../SimpleDialog/SimpleDialog'
import './PokemonCard.css';

export default function PokemonCard(pokemon) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (<div>

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
      onClick={handleClickOpen}
        className='imagen'
        component="img"
        image={pokemon.pokemon.image}
        alt={pokemon.pokemon.name}
      />
      <CardActions disableSpacing>
          <button onClick={handleClickOpen} className='btn-grad'>Más detalles</button>
      </CardActions>
    </Card>
    <SimpleDialog
      selectedValue={selectedValue}
      open={open}
      pokemonId={pokemon.pokemon.id}
      onClose={handleClose}
    />
  </div>
  );
}