import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "../../../axios";
import { withRouter } from 'react-router-dom';

import classes from "./TicketSummary.css";
import Modal from "../../UI/Modal/Modal";
import Spinner from "../../UI/Spinner/Spinner";
import * as actionTypes from "../../../store/actions";

class TicketSummary extends Component {
    state = {
        name: null,
        surname: null,
        patronymic: null,
        passNumber: null,
        loading: false
    };

    sendData(event) {
        event.preventDefault();
        this.setState({ loading: true });
        const data = {
            name: this.state.name,
            surname: this.state.surname,
            patronymic: this.state.patronymic,
            passNumber: this.state.passNumber,
            departureDate: this.props.storeTicket.departureDate,
            departureTime: this.props.storeTicket.departureTime,
            arrivalDate: this.props.storeTicket.arrivalDate,
            arrivalTime: this.props.storeTicket.arrivalTime
        };
        axios
            .post("/orders.json", data)
            .then(response => {
                this.setState({ loading: false });
                this.props.resetTicket();
                this.props.closeModal();
                this.props.history.push('/done');
            })
            .catch(error => {
                this.props.showErrorMessage();
                setTimeout(() => {
                    this.props.showErrorMessage();
                }, 10000);
            });
    }

    closeModal(event) {
        event.preventDefault();
        this.props.closeModal();
    }

    render() {
        const ticketInfoStore = (
            <ul className={classes.ticketInfo}>
                <li>Цена: {this.props.storeTicket.price}</li>
                <li>
                    Дата отправления: {this.props.storeTicket.departureDate}
                </li>
                <li>
                    Время отправления: {this.props.storeTicket.departureTime}
                </li>
                <li>Дата прибытия: {this.props.storeTicket.arrivalDate}</li>
                <li>Время прибытия: {this.props.storeTicket.arrivalTime}</li>
            </ul>
        );

        let content = null;
        if (this.state.loading) {
            content = (
                <Modal show={this.props.show}>
                    <Spinner />
                </Modal>
            );
        } else {
            content = (
                <Modal show={this.props.show}>
                    <form>
                        <p>Ваш заказ:</p>
                        {ticketInfoStore}
                        <div className={classes.labels}>
                            <label>
                                Имя:
                                <input
                                    type="text"
                                    onChange={event =>
                                        this.setState({
                                            name: event.target.value
                                        })
                                    }
                                    required
                                />
                            </label>
                            <label>
                                Фамилия:
                                <input
                                    type="text"
                                    onChange={event =>
                                        this.setState({
                                            surname: event.target.value
                                        })
                                    }
                                    required
                                />
                            </label>
                            <label>
                                Отчетсво:
                                <input
                                    type="text"
                                    onChange={event =>
                                        this.setState({
                                            patronymic: event.target.value
                                        })
                                    }
                                    required
                                />
                            </label>
                            <label>
                                Номер паспорта:
                                <input
                                    type="text"
                                    onChange={event =>
                                        this.setState({
                                            passNumber: event.target.value
                                        })
                                    }
                                    required
                                />
                            </label>
                        </div>
                        <div className={classes.buttons}>
                            <input
                                type="submit"
                                className={classes.buttons__button_succes}
                                onClick={this.sendData.bind(this)}
                                value="Забронировать"
                            />
                            <input
                                type="reset"
                                className={classes.buttons__button_danger}
                                onClick={this.closeModal.bind(this)}
                                value="Отмена"
                            />
                        </div>
                    </form>
                </Modal>
            );
        }

        return content;
    }
}

const mapStateToProps = state => {
    return {
        storeTicket: state.ticketInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch({ type: actionTypes.CLOSE_BACKDROP }),
        resetTicket: () => dispatch({type: actionTypes.RESET_TICKET}),
        showErrorMessage: () => dispatch({type: actionTypes.DISPLAY_ERROR})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TicketSummary));