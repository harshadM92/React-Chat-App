import React, { Component } from 'react';
import { connect } from 'react-redux'
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import { sendMessage, socket } from '../utils/util';

const createChatToUser = (messageObj) => {
    const chatToUser = {
        userName: messageObj.from,
        name: messageObj.fromName,
    }
    return chatToUser;
}
class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = { messageList: [], userName: props.login.userName, chatToUser: {} };
        this.sendMessage = this.sendMessage.bind(this);
        this.createMessageObj = this.createMessageObj.bind(this);
        this.pushToMessageList = this.pushToMessageList.bind(this);
        socket.on(this.state.userName, (messageObj) => {
            console.log(messageObj);
            this.pushToMessageList(messageObj);
            this.setState({ chatToUser: createChatToUser(messageObj) });
        });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ userName: nextProps.login.userName, chatToUser: nextProps.chatObj.chatToUser });
    }
    sendMessage(chatText) {
        const messageObj = this.createMessageObj(chatText);
        this.pushToMessageList(messageObj);
        sendMessage(messageObj);
    }
    pushToMessageList(messageObj) {
        this.setState((prevState) => {
            let messageListTemp = prevState.messageList;
            messageListTemp.push(messageObj);
            return { messageList: messageListTemp }
        });
    }

    createMessageObj(chatText) {
        const messageObj = {
            from: this.state.userName,
            to: this.state.chatToUser.userName,
            message: chatText,
            fromName: this.state.userName,
        }
        return messageObj;
    }
    render() {
        const { messageList, userName, chatToUser: { name } } = this.state;
        return (
            <div className="border p-3">
                <div className="d-inline-flex px-3 py-2 bg-info text-white text-capitalize">{name}</div>
                <div className="d-flex flex-column">
                    <ChatMessages messageList={messageList} userName={userName} />
                    <ChatInput sendMessage={this.sendMessage} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        login: state.login,
        chatObj: state.chatObj,
    }
}
export default connect(mapStateToProps, null)(ChatRoom);