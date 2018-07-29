import React from 'react';

import appLogo from '../../../assets/images/logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.logo}>
        <img src={appLogo} className={classes.log__image} alt="appLogo" />
    </div>
);

export default logo;