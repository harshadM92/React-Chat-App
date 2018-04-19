import React from 'react';

const ChatMessageCard = ({ messageObj, userName }) => (
    <div className={`d-flex mb-2 mt-auto justify-content-${messageObj.from === userName ? 'end' : 'start'}`}>
        <div className={`border rounded p-2 ${messageObj.from === userName ? 'myChatBubble' : 'friendChatBubble'}`}>
            <span>{messageObj.message}</span>
        </div>
    </div>
);
export default ChatMessageCard;