import React from 'react';
import classes from './Player.css';
// https://jsfiddle.net/Zeaklous/mmrnvwhn/8/
const player = (props) => (
    <div className={classes.player}>
        <div className={classes.player__picture}>
            <img src={props.player.picture} alt={props.player.firstname} />
        </div>
        <div className={classes.player__name}>
            <p><span>{props.player.firstname}</span> <span>{props.player.lastname}</span></p>
            <p>({props.player.shortname})</p>
        </div>
    </div>
);

export default player;