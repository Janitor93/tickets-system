import React from 'react';
import { connect } from 'react-redux';

import classes from './Ticket.css';
import Button from '../../UI/Button/Button';
import ArrowImage from '../../../assets/images/arrow.png';


import AustrianAirline from '../../../assets/images/austrian_airline.jpg';

const ticket = (props) => (
    <div className={classes.ticket}>
        <div className={classes.ticket__priceInfo}>
            <img className={classes.ticket__imgae} src={AustrianAirline} />
            <Button clicked={props.onClicked}>Купить<br />за {(props.price / props.rate).toFixed(2) + ' ' + props.currency}</Button>
        </div>
        <div className={classes.ticket__vl} />
        <div className={classes.ticket__pathInfo}>
            <div className={classes.ticket__pathInfoLeftDiv}>
                <h4 className={classes.ticket__pathInfo_time}>{props.departureTime}</h4>
                <p className={classes.ticket__pathInfo_city}>{props.departureСity}</p>
                <p className={classes.ticket__pathInfo_date}>{props.departureDate}</p>
            </div>
            <div className={classes.ticket__pathInfo_transfers}>
                <p className={classes.ticket__pathInfo_stops}>{getCorrectWordForm(props.stops)}</p>
                <img src={ArrowImage} />
            </div>
            <div className={classes.ticket__pathInfoRightDiv}>
                <h4 className={classes.ticket__pathInfo_time}>{props.arrivalTime}</h4>
                <p className={classes.ticket__pathInfo_city}>{props.arrivalСity}</p>
                <p className={classes.ticket__pathInfo_date}>{props.arrivalDate}</p>
            </div>
        </div>
    </div>
);

function getCorrectWordForm(days) {
    if(days === 0) {
        return 'Без пересадок';
    } else if(days % 10 === 1 && days % 100 !== 11) {
        return days + ' пересадка';
    } else if(days % 10 >= 2 && days % 10 <= 4 && days % 100 !== 12) {
        return days + ' пересадки';
    } else if(days % 100 >= 5) {
        return days + ' пересадок';
    }
}

const mapStateToProps = state => {
    return {
        rate: state.currencyRate,
        currency: state.currencyName
    };
};

export default connect(mapStateToProps)(ticket);