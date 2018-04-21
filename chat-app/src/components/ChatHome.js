import React from 'react';
import { withRouter } from 'react-router-dom';
import ChatRoom from './ChatRoom';
import FriendsList from './FriendsList';
import { getSessionStorageItem } from '../utils/util';

const ChatHome = ({ history }) => {
    if (!getSessionStorageItem('login_user_name')) {
        history.push('/login');
        return '';
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col mb-md-0 mb-3">
                    <FriendsList />
                </div>
                <div className="col-12 col-md-9">
                    <ChatRoom />
                </div>
            </div>
        </div>
    );
};

export default withRouter(ChatHome);