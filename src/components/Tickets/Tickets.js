import React, { Component } from "react";
import axios from '../../axios';
import { connect } from 'react-redux';

import classes from "./Tickets.css";
import Ticket from "./Ticket/Ticket";
import Spinner from "../UI/Spinner/Spinner";
import Modal from "../UI/Modal/Modal";
import TicketSummary from './TicketSummary/TicketSummary';
import * as actionTypes from "../../store/actions";

const TRANSFERS = {
    '0': 'without',
    '1': 'one',
    '2': 'two',
    '3': 'three'
};

class Tickets extends Component {
    state = {
        tickets: null
    };

    showModalOrder(ticket) {
        this.props.onModalHandler();
        this.props.updateTicketInfo(ticket);
    }

    componentDidMount() {
        axios.get('/tickets.json')
            .then(response => {
                response.data.sort((a, b) => a.stops - b.stops);
                this.setState({tickets: response.data});
            })
            .catch(error => {
                this.props.showErrorMessage();
                setTimeout(() => {
                    this.props.showErrorMessage();
                }, 10000);
            });
    }

    render() {
        let tickets = null;
        let ticketSummary = null;

        if(this.state.tickets) {
            tickets = this.state.tickets.map((ticket, index) => {
                if(this.props.checked[TRANSFERS[ticket.stops]] || this.props.checked.all) {
                    return (
                            <Ticket 
                                carrier={ticket.carrier}
                                price={ticket.price} 
                                departureСity={ticket.origin_name}
                                departureDate={ticket.departure_date}
                                departureTime={ticket.departure_time}
                                arrivalСity={ticket.destination_name}
                                arrivalDate={ticket.arrival_date}
                                arrivalTime={ticket.arrival_time}
                                stops={ticket.stops}
                                key={index}
                                onClicked={() => this.showModalOrder(ticket)}
                            />
                    );
                }
            });
        } else {
            tickets = <Spinner />
        }

        if(this.props.showModal) {
            ticketSummary = <TicketSummary show={this.props.showModal} />
        }

        return (
            <div className={classes.tickets}>
                {ticketSummary}
                {tickets}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        checked: state.checkbox,
        showModal: state.showModal,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showErrorMessage: () => dispatch({type: actionTypes.DISPLAY_ERROR}),
        onModalHandler: () => dispatch({type: actionTypes.SHOW_MODAL}),
        updateTicketInfo: (ticket) => dispatch({type: actionTypes.SAVE_TICKET, ticket: ticket})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
