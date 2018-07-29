import React from "react";

import classes from './Spinner.css';

const spinner = props => (
    <div className={classes.spinner}>
        <div className={classes.double_bounce1} />
        <div className={classes.double_bounce2} />
    </div>
);

export default spinner;
