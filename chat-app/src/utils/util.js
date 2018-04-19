export let socket = {};
export const setSocket = (socketObj) => {
    socket = socketObj;
};
export const sendMessage = (messageObj) => {
    socket.emit('exchange-message', messageObj);
};
export const getLoacalStorageItem = (key) => {
    return sessionStorage.getItem(key);
}