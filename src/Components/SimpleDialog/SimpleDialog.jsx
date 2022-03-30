import * as React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import {fetchOnePokemon} from '../../API/pokeapi'
import './SimpleDialog.css'

export default function SimpleDialog(props) {
    const [dataDialog, setDataDialog]= React.useState({})
    const { onClose, selectedValue, open } = props;
    const handleClose = () => {
      onClose(selectedValue);
    };
    const getOnePokemonExtraData = () => fetchOnePokemon(props.pokemonId).then((response)=>{
        setDataDialog(response)
    }).catch((error)=>
    console.log(error))

    React.useEffect(()=>{
        getOnePokemonExtraData()
    },[])
  
    return (
        <Dialog className='cardDialog' onClose={handleClose} maxWidth="xl"  open={open}>
    { ( dataDialog && dataDialog.nombre !== undefined)?
        <>
        <img src={dataDialog.img} alt="PokemonImg"/>
        <div class="contentDialogPokemon">
            <h1>{dataDialog.nombre.charAt(0).toUpperCase() + dataDialog.nombre.slice(1)}</h1>
            <h3>Peso: {dataDialog.peso} kg , Altura: {dataDialog.altura} m </h3>
            <div className='abilmoves'>
                <div>
                Habilidades:
                    {dataDialog.habilidades.map((habilidad)=>{
                        return ` ${habilidad.ability.name.charAt(0).toUpperCase()  + habilidad.ability.name.slice(1)},`
                    })}
                </div>
                <br/>
                <div className='movimientos'>
                Movimientos:
                    {dataDialog.movimientos.map((movimiento)=>{
                        return ` ${movimiento.move.name.charAt(0).toUpperCase() + movimiento.move.name.slice(1)},`
                    })}
                </div>
            </div>
                <div class="priceDialogPokemon">
                <button className='ataque'> Ataque: {dataDialog.ataque} </button>
                <button className='defensa'> Defensa: {dataDialog.defensa}  </button>
                <button className='especial'> Especial: {dataDialog.especial}  </button>
            </div>
        </div>
        </>
      
     : 'cargando' }
     </Dialog>
    );
  }
  
  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };