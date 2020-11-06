import { Autorenew } from '@material-ui/icons';
import React from 'react';
import spinner from './Spinner.gif';

function Spinner() {
    return (
        <div>
            <img 
             src= {spinner}
             style= {{width: '200px', margin: 'auto', display: 'block'}}
             alt= 'LOADING...'
            />
        </div>
    );
}

export default Spinner;
