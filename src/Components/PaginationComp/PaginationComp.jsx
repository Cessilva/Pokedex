import * as React from 'react';
import './PaginationComp.css'
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import Typography from '@mui/material/Typography';

export default function PaginationComp(props) {
  return (
    <div className='flexBox'>
        <div className='pagElem'>
        <IconButton onClick={props.handleSkipPreviousClick}  sx={{color:'#fff',backgroundColor:'#2a75bb'}} >
            <SkipPreviousIcon sx={{fontSize:'2.5em'}}/>
        </IconButton>
        <IconButton onClick={props.handleFastRewindClick}  sx={{color:'#fff',backgroundColor:'#2a75bb'}} >
            <FastRewindIcon sx={{fontSize:'2.5em'}}/>
        </IconButton>
        <IconButton onClick={props.handleFastForwardClick}  sx={{color:'#fff',backgroundColor:'#2a75bb'}} >
            <FastForwardIcon sx={{fontSize:'2.5em'}}/>
        </IconButton>
        <IconButton onClick={props.handleSkipNextClick}  sx={{color:'#fff',backgroundColor:'#2a75bb'}} >
            <SkipNextIcon sx={{fontSize:'2.5em'}}/>
        </IconButton>
        </div>
        <div className='pagElemActual'>
        <Typography sx={{fontFamily:'Comfortaa', color:'#fff', fontSize: '2.5em'}} gutterBottom >
             Pág: {props.page}
        </Typography>
        </div>
    </div>
    );
}