import React from "react";
import { connect } from 'react-redux';

import classes from "./Backdrop.css";
import * as actionTypes from '../../../store/actions';

const backdrop = props => {
    if(!props.show) return null;
    return <div className={classes.backdrop} onClick={props.onClickeBackdrop} />;
};

const mapDispatchToProps = dispatch => {
    return {
        onClickeBackdrop: () => dispatch({type: actionTypes.CLOSE_BACKDROP})
    };
};

export default connect(null, mapDispatchToProps)(backdrop);