import React from 'react';
import { connect } from 'react-redux';

import classes from './DrawerToggle.css';
import * as actionTypes from '../../../../store/actions';

const drawerToggle = (props) => (
    <div className={classes.drawerToggle} onClick={props.onToggleSidebar}>
        <div className={classes.drawerToggle__line}></div>
        <div className={classes.drawerToggle__line}></div>
        <div className={classes.drawerToggle__line}></div>
    </div>
);

const mapDispatchToProps = dispatch => {
    return {
        onToggleSidebar: () => dispatch({type: actionTypes.SHOW_SIDEBAR})
    };
};

export default connect(null, mapDispatchToProps)(drawerToggle);