import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';
import * as actionTypes from '../../store/actions';

class Layout extends Component {
    render() {
        let error = null;
        if(this.props.error) {
            error = (
                <div className={classes.error + ' ' + classes.show}>
                    <h4 className={classes.error__heading}>Что-то пошло не так</h4>
                    <p className={classes.error__paragraph}>Неполадки с сервером, приносим извенения за неудобства</p>
                </div>
            );
        }
        return (
            <Aux>
                <Toolbar />
                <Sidebar 
                    open={this.props.showSideBar}
                />
                <main className={classes.content}>
                    {this.props.children}
                    {error}
                </main>
                <Footer />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        showSideBar: state.showSideBar,
        error: state.error
    };
};

export default connect(mapStateToProps)(Layout);