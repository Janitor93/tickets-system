import React from 'react';
import { connect } from 'react-redux';

import classes from './CloseButton.css';
import CloseLogo from '../../../../assets/images/close-button.png';
import * as actionTypes from '../../../../store/actions';

const closeButton = (props) => (
    <div className={classes.closeButton} onClick={props.onToggleSidebar}>
        <img className={classes.closeButton__image} src={CloseLogo} alt="closeLogo" />
    </div>
);

const mapDispatchToProps = dispatch => {
    return {
        onToggleSidebar: () => dispatch({type: actionTypes.SHOW_SIDEBAR})
    };
};

export default connect(null, mapDispatchToProps)(closeButton);