const userNameList = [
    'h123',
    's123'
]
export const login = (userName, password) => {
    return dispatch => {
        if (userNameList.indexOf(userName) > 0 && password === '123') {
            sessionStorage.setItem('login_user_name', userName);
            dispatch(saveUserDetail(userName));
            return Promise.resolve(true);
        } else {
            return Promise.resolve(false);
        }
    }
}
export const saveUserDetail = (userName) => {
    return dispatch => {
        dispatch({
            type: 'SAVE_USER_DETAIL',
            payload: userName
        });
    }
}
export const logout = (history) => {
    return dispatch => {
        sessionStorage.clear();
        dispatch({
            type: 'USER_LOGOUT',
            payload: true,
        });
        history.push('/login');
    }
}