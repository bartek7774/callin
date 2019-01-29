import { combineReducers } from 'redux';
import phoneReducer from './phone-reducer';
import userReducer from './user-reducer';
import eventReducer from './event-reducer';

export default combineReducers(
  {
    phone: phoneReducer,
    user: userReducer,
    event: eventReducer
  }
);
