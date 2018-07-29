import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Filter.css';
import ButtonGroup from '../UI/ButtonGroup/ButtonGroup';
import Checkbox from '../UI/Checkbox/Checkbox';
import * as actionTypes from '../../store/actions';

class Filter extends Component {
    render() {
        let buttons = ['BYN', 'USD', 'EUR'];
        return (
            <div className={classes.filter}>
                <h5 className={classes.filter__heading5}>Валюта</h5>
                <ButtonGroup buttons={buttons} />
                <h5 className={classes.filter__heading5}>Колиество пересадок</h5>
                <div className={classes.filter__checkboxes}>
                    <Checkbox 
                        name="all" 
                        checked={this.props.checkbox.all}
                        onchanged={() => this.props.onChangeCheckbox('all')}
                    >Все</Checkbox>
                    <Checkbox
                        name="without" 
                        checked={this.props.checkbox.without}
                        onchanged={() => this.props.onChangeCheckbox('without')}
                    >Без пересадок</Checkbox>
                    <Checkbox 
                        name="one"
                        checked={this.props.checkbox.one}
                        onchanged={() => this.props.onChangeCheckbox('one')}
                    >1 пересадка</Checkbox>
                    <Checkbox 
                        name="two"
                        checked={this.props.checkbox.two}
                        onchanged={() => this.props.onChangeCheckbox('two')}
                    >2 пересадка</Checkbox>
                    <Checkbox 
                        name="three"
                        checked={this.props.checkbox.three}
                        onchanged={() => this.props.onChangeCheckbox('three')}
                    >3 пересадка</Checkbox>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        checkbox: state.checkbox
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeCheckbox: (checkboxName) => dispatch({type: actionTypes.CHAGE_CHECKBOX, name: checkboxName})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);