const ChatReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_CHAT_TO_USER_NAME':
            return Object.assign({}, state, { chatToUser: action.payload });
        default:
            return Object.assign({}, state);
    }
}
export default ChatReducer;