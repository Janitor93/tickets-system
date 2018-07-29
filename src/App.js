import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'

import Layout from "./hoc/Layout/Layout";
import Home from './containers/Home/Home';
import TicketSystem from "./containers/TicketSystem/TicketSystem";
import Congratulation from './containers/Congratulation/Congratulation';

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/tickets" component={TicketSystem} />
                    <Route path="/done" component={Congratulation} />
                </Switch>
            </Layout>
        );
    }
}

export default App;
