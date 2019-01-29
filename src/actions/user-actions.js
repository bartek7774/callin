import { SET_TOKEN,  PENDING_CALL_REQUEST, SUCCESS_CALL_REQUEST, ERROR_CALL_REQUEST } from '../reducers/user-reducer';
import SendingEvents from '../utils/sendEvents';

  
  const SE = new SendingEvents();
  
  export const getToken = () => {
    var token = SE.extractToken();
    return {
      type: SET_TOKEN,
      payload: token
    }
  }
  
  export const callNow = (data) => (dispatch) => {
    dispatch({ type: PENDING_CALL_REQUEST, payload: data.eventType });
    SE.dispatchEvent(data)
      .then(data => dispatch({ type: SUCCESS_CALL_REQUEST, payload: data }))
      .catch(err => dispatch({ type: ERROR_CALL_REQUEST, payload: err.message }));
  }