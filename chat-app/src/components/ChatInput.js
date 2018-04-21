import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';

class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.state = { chatText: '' };
        this.handleChange = this.handleChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    sendMessage() {
        this.props.sendMessage(this.state.chatText);
        this.setState({chatText: ''});
    }
    render() {
        const { chatText } = this.state;
        return (
            <div className="chat-chat-input d-flex flex-row">
                <Input type="text" name="chatText" value={chatText} onChange={this.handleChange} placeholder="Start Chatting" />
                <Button color="primary" className="rounded-circle ml-3" onClick={()=>this.sendMessage()}><i className="fa fa-paper-plane" /></Button>
            </div>
        )
    }
}

export default ChatInput;