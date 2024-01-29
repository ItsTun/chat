export const SET_USER_NAME = 'SET_USER_NAME';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const LOAD_MESSAGE_HISTORY = 'LOAD_MESSAGE_HISTORY';

export const setUserName = (name) => ({
  type: SET_USER_NAME,
  payload: name,
});

export const sendMessage = (text) => ({
  type: SEND_MESSAGE,
  payload: { user: 'You', text },
});

export const loadMessageHistory = () => ({
  type: LOAD_MESSAGE_HISTORY,
});
