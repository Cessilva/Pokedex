import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import './PokemonCard.css';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} maxWidth="xl"  open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <div className='dialog'>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste ad accusamus dolore, reprehenderit labore impedit, nobis laboriosam amet ex consectetur voluptatibus deleniti quo quam deserunt nesciunt iure nostrum nemo.
        Commodi adipisci libero quis in molestias! Commodi at reprehenderit repudiandae ullam cupiditate sit cumque. Excepturi repellat ipsa, deleniti ducimus expedita odio commodi culpa amet voluptate esse doloribus quaerat vero dolores.
        Magni magnam cumque quis. Et maiores dolorum cupiditate voluptatibus optio delectus nihil velit unde minima totam magni praesentium eveniet libero, enim dolores quisquam debitis eaque? Doloremque ab in eveniet eius.
        Ab minima et consectetur sequi, incidunt quo delectus eaque voluptatibus vero similique in maiores vel ullam cumque dolorum nostrum provident veniam aperiam, dolor expedita ratione totam quibusdam. Earum, harum dolore.
       te quia beatae blanditiis ipsum repellat excepturi, at neque accusamus molestiae doloremque consectetur quas! Ex velit laborum perspiciatis culpa placeat sequi ullam.
        Repudiandae laboriosam in nulla itaque corrupti, iusto tenetur voluptatum dolorem, distinctio nesciunt ipsum suscipit impedit qui ipsa, labore similique aliquid expedita fugit repellat dolore sapiente accusantium. Cum ex est totam.
        Accusamus quam quos ex aperiam animi aut, quidem aliquid! Ducimus aliquam reiciendis natus error illum nulla eaque cumque, voluptatum facilis quas ad explicabo quaerat voluptate voluptates quae at sint fuga.
        Dolore asperiores, saepe commodi vero corporis aut, dicta qui laudantium ipsum quidem tempora rem tenetur illum porro consequatur minus perferendis magni, quis necessitatibus voluptas repudiandae minima in nihil! Architecto, est?
        Assumenda sint sequi blanditiis ea itaque illo quidem sit, perspiciatis provident quibusdam voluptates nemo fugiat fugit in adipisci sapiente velit, quia aspernatur? Velit ad adipisci corrupti excepturi nihil dolores animi.
        </p>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function PokemonCard(pokemon) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
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
    onClose={handleClose}
  />
  </div>
  );
}