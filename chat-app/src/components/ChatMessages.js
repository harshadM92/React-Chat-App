import React from 'react';
import ChatMessageCard from './ChatMessageCard';

const ChatMessages = ({ messageList, userName }) => (
    <div className="d-flex flex-column chat-messages border rounded my-3 p-3">
        <div className="mt-auto">
            {messageList.map((messageObj, index) => {
                return <ChatMessageCard key={index} messageObj={messageObj} userName={userName} />;
            })}
        </div>
    </div>
);
export default ChatMessages;
