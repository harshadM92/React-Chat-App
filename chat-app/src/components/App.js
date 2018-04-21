import React from 'react';
import socketIOClient from 'socket.io-client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setSocket } from '../utils/util';
import Main from './Main';
import NavBar from './common/NavBar';
import { getRoutes, chatEndPoint } from '../constants/ChatConstants';

const initiateSocket = () => {
    setSocket(socketIOClient(chatEndPoint));
};
const App = ({ history }) => {
    initiateSocket();
    return (
        <Router >
            <Switch>
                <Route render={() => (<Main component={<NavBar />} routes={getRoutes()} />)} />
            </Switch>
        </Router>
    )
};
export default App;
