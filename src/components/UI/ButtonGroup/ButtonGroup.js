import React, { Component } from "react";
import axios from '../../../axios';
import { connect } from 'react-redux';

import classes from "./ButtonGroup.css";
import * as actionTypes from '../../../store/actions';

const CURRENCY_ID = {
    'RUB': 190,
    'USD': 145,
    'EUR': 292
};

const BUTTON_ID = {
    'BYN': 0,
    'USD': 1,
    'EUR': 2
};

class ButtonGroup extends Component {
    state = {
        currentActive: BUTTON_ID[this.props.currency]
    };

    activeClickHandler(index, event) {
        this.setState({ currentActive: index });
        const currency = event.target.name;
        if(currency !== 'BYN') {
            axios.get('http://www.nbrb.by/API/ExRates/Rates/' + CURRENCY_ID[currency])
                .then(response => this.props.setNewRate(response.data.Cur_OfficialRate, currency))
                .catch(error => console.log(error));
        } else {
            this.props.setNewRate(1, 'BYN');
        }
    }

    render() {
        let active = null;
        const buttons = this.props.buttons.map((button, index) => {
            active = index === this.state.currentActive ? classes.active : null;
            if (index === 0) {
                return (
                    <button
                        className={
                            classes.buttonGroup__button + " " +
                            classes.buttonGroup__button_first + " " +
                            active
                        }
                        key={index}
                        onClick={(e) => this.activeClickHandler(index, e)}
                        name={button}
                    >
                        {button}
                    </button>
                );
            } else if (index === this.props.buttons.length - 1) {
                return (
                    <button
                        className={
                            classes.buttonGroup__button + " " +
                            classes.buttonGroup__button_last + " " +
                            active
                        }
                        key={index}
                        onClick={(e) => this.activeClickHandler(index, e)}
                        name={button}
                    >
                        {button}
                    </button>
                );
            } else {
                return (
                    <button
                        className={
                            classes.buttonGroup__button + " " +
                            classes.buttonGroup__button_middle + " " +
                            active
                        }
                        key={index}
                        onClick={(e) => this.activeClickHandler(index, e)}
                        name={button}
                    >
                        {button}
                    </button>
                );
            }
        });

        return <div className={classes.buttonGroup}>{buttons}</div>;
    }
}

const mapStateToProps = state => {
    return {
        currency: state.currencyName
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setNewRate: (rate, currency) => dispatch({type: actionTypes.RECALCULATE_CURRENCY, currencyRate: rate, currencyName: currency})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonGroup);
