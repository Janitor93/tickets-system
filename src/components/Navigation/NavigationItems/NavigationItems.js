import React, { Component } from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

class NavigationItems extends Component {
    render() {
        return (
            <ul className={classes.navigationItems}>
                <NavigationItem
                    link="/"
                    exact
                >Home</NavigationItem>
                <NavigationItem
                    link="/tickets"
                >Tickets</NavigationItem>
            </ul>
        );
    }
}

export default NavigationItems;