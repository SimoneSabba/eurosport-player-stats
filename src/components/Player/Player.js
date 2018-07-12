import React from 'react';
import classes from './Player.css';

const player = (props) => (
    <div className={classes.player}>
        {props.player.firstname}
    </div>
);

export default player;