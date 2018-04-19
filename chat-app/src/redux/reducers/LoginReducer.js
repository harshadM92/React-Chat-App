const LoginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SAVE_USER_DETAIL':
            return Object.assign({}, state, { userName: action.payload });
        case 'USER_LOGOUT':
            return state = {};
        default:
            return Object.assign({}, state);
    }
}
export default LoginReducer;