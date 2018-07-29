import React from 'react';

import classes from './Footer.css';

const footer = (props) => (
    <footer className={classes.footer}>
        <div className={classes.footer__wrapper}>
            <div>Sticky Footer</div>
            <div>
                <a className={classes.footer__link} href="https://github.com/Janitor93" target="_blank">GitHub</a>
            </div>
        </div>
    </footer>
);

export default footer;