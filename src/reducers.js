import { SET_USER_NAME, SEND_MESSAGE, LOAD_MESSAGE_HISTORY } from './actions';

const initialState = {
  userName: '',
  messages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case LOAD_MESSAGE_HISTORY:
      const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
      return {
        ...state,
        messages: storedMessages,
      };
    default:
      return state;
  }
};

export default reducer;
