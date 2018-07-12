import React from 'react';
import classes from './Header.css';
import logo from '../../Eurosport_logo.svg';

const header = () => (
    <header className={classes.header}>
        <img src={logo} alt="logo" />
        Eurosport Player Stats
    </header>
);

export default header;