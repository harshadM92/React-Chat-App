import React from 'react';
import ChatRoom from './ChatRoom';
import FriendsList from './FriendsList';

const ChatHome = () => (
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
)

export default ChatHome;