import React, { Component } from 'react';

import classes from './Checkbox.css';

class Checkbox extends Component {
    state = {
        checked: false
    };

    render() {
        return (
            <label className={classes.checkbox}>
                {this.props.children}
                <input 
                    className={classes.checkbox__input}
                    type="checkbox" 
                    name={this.props.name}
                    onChange={this.props.onchanged} 
                    checked={this.props.checked}
                />
                <span className={classes.checkbox__checkmark} />
            </label>
        );
    }
}

export default Checkbox;