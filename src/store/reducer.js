import * as actionTypes from './actions';

const initialState = {
    showSideBar: false,
    showModal: false,
    checkbox: {
        all: true,
        without: false,
        one: false,
        two: false,
        three: false
    },
    currencyRate: 1,
    currencyName: 'BYN',
    error: false,
    ticketInfo: {
        price: null,
        departureDate: null,
        departureTime: null,
        arrivalDate: null,
        arrivalTime: null
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CLOSE_BACKDROP:
            return {
                ...state,
                showSideBar: false,
                showModal: false
            };
        case actionTypes.SHOW_SIDEBAR:
            return {
                ...state,
                showSideBar: !state.showSideBar
            };
        case actionTypes.CHAGE_CHECKBOX:
            if(action.name === 'all') {
                return {
                    ...state,
                    checkbox: {
                        all: !state.checkbox.all,
                        without: false,
                        one: false,
                        two: false,
                        three: false
                    }
                };    
            }
            return {
                ...state,
                checkbox: {
                    ...state.checkbox,
                    all: state.checkbox.all === true ? false : state.checkbox.all,
                    [action.name]: !state.checkbox[action.name]
                }
            };
        case actionTypes.RECALCULATE_CURRENCY:
            return {
                ...state,
                currencyRate: action.currencyRate,
                currencyName: action.currencyName
            };
        case actionTypes.DISPLAY_ERROR:
            return {
                ...state,
                error: !state.error
            };
        case actionTypes.SHOW_MODAL:
            return {
                ...state,
                showModal: !state.showModal
            };
        case actionTypes.SAVE_TICKET:
            return {
                ...state,
                ticketInfo: {
                    price: action.ticket.price,
                    departureDate: action.ticket.departure_date,
                    departureTime: action.ticket.departure_time,
                    arrivalDate: action.ticket.arrival_date,
                    arrivalTime: action.ticket.arrival_time
                }
            };
        case actionTypes.RESET_TICKET:
            return {
                ...state,
                ticketInfo: {
                    price: null,
                    departureDate: null,
                    departureTime: null,
                    arrivalDate: null,
                    arrivalTime: null
                }
            };
    }
    return state;
};

export default reducer;