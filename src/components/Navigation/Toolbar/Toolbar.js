import React, { Component } from 'react';

import classes from './Toolbar.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../Sidebar/DrawerToggle/DrawerToggle';

class Toolbar extends Component {
    render() {
        return (
            <header className={classes.header}>
                <div className={classes.header__wrapper}>
                    <DrawerToggle />
                    <div className={classes.header__logo}>
                        <Logo />
                    </div>
                    <nav className={classes.header__nav}>
                        <NavigationItems />
                    </nav>
                </div>
            </header>
        );
    }
}

export default Toolbar;