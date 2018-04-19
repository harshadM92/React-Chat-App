import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSocket, getLoacalStorageItem } from '../utils/util';
import Main from './Main';
import NavBar from './common/NavBar';
import { getRoutes, chatEndPoint } from '../constants/ChatConstants';
import * as LoginActions from '../redux/actions/LoginAction';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endpoint: chatEndPoint // this is where we are connecting to with sockets
        };
        setSocket(socketIOClient(this.state.endpoint));
        const userName = getLoacalStorageItem('login_user_name') || false;
        if (userName) {
            props.saveUserDetail(userName);
        }
    }
    render() {
        return (
            <Router >
                <Switch>
                    <Route render={() => (<Main component={<NavBar />} routes={getRoutes()} />)} />
                </Switch>
            </Router>
        );
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(LoginActions, dispatch);
}
export default connect(null, mapDispatchToProps)(App);
