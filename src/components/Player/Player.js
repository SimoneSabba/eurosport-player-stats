import React from 'react';
import classes from './Player.css';

const player = (props) => (
    <div className={classes.player}>

        <div className={classes.player__ranking}>
            <h1>#{props.data.rank}</h1>
        </div>

        <div className={classes.player__picture}>
            <img src={props.picture} alt={props.firstname} />
        </div>

        <div className={classes.player__name}>
            <h1>{props.firstname} {props.lastname}</h1>
        </div>

        <div className={classes.player__wrapper}>
            <h3>Nationality: </h3>
            <img src={props.country.picture} alt={props.country.code}/>
        </div>

        <div className={classes.player__wrapper}>
            <h3>Age:</h3>
            <span>{props.data.age}</span>
        </div>

        <div className={classes.player__wrapper}>
            <h3>Weight:</h3>
            <span>{props.data.weight /1000}kg</span>
        </div>

        <div className={classes.player__wrapper}>
            <h3>Height:</h3>
            <span>{props.data.height}cm</span>
        </div>

        <div className={classes.player__wrapper}>
            <h3>Points:</h3>
            <h2>{props.data.points}</h2>
        </div>

    </div>
);

export default player;