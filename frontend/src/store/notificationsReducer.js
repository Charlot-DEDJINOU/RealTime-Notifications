const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

// Action creators
export const addNotification = (message) => ({
  type: ADD_NOTIFICATION,
  payload: message,
});

export const removeNotification = (id) => ({
  type: REMOVE_NOTIFICATION,
  payload: id,
});

// Initial state
const initialState = {
  notifications: [],
};

// Reducer
const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter((notif) => notif.id !== action.payload),
      };
    default:
      return state;
  }
};

export default notificationsReducer;
