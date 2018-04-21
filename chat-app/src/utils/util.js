export let socket = {};
export const setSocket = (socketObj) => {
    socket = socketObj;
};
export const sendMessage = (messageObj) => {
    socket.emit('exchange-message', messageObj);
};
export const getSessionStorageItem = (key) => {
    return sessionStorage.getItem(key);
}
