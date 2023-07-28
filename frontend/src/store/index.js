import { createStore, combineReducers } from 'redux';
import notificationsReducer from './notificationsReducer';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  // Ajoutez d'autres reducers si nécessaire
});

const store = createStore(rootReducer);

export default store;
