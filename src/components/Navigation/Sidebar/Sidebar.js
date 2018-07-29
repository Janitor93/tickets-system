import React from "react";

import classes from "./Sidebar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import CloseButton from "./CloseButton/CloseButton";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from '../../UI/Backdrop/Backdrop';

const sidebar = props => {
    let jointClasses = [classes.sidebar, classes.close];
    if (props.open) {
        jointClasses = [classes.sidebar, classes.open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} />
            <div className={jointClasses.join(" ")}>
                <CloseButton />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sidebar;
