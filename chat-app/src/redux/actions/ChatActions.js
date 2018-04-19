export const setChatToUser = (chatToUser) => {
    return dispatch => {
        dispatch({
            type: 'UPDATE_CHAT_TO_USER_NAME',
            payload: chatToUser,
        });
    }
}