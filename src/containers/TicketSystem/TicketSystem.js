import React, { Component } from "react";

import classes from "./TicketSystem.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Filter from "../../components/Filter/Filter";
import Tickets from "../../components/Tickets/Tickets";

class TicketSystem extends Component {
    render() {
        let pushDiv = <div className={classes.pushContent} />
        return (
            <div className={classes.ticketSystem}>
                <Filter />
                {pushDiv}
                <Tickets />
            </div>
        );
    }
}

export default TicketSystem;
