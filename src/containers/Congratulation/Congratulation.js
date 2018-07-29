import React, { Component } from 'react';

import classes from './Congratulation.css';

class Congratulation extends Component {
    render() {
        return (
            <div className={classes.congratulation}>
                <h4>Спасибо!</h4>
                <p>Вы забронировали билеты. Наш менеджер с вами свяжется.</p>
            </div>
        );
    }
}

export default Congratulation;