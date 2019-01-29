import { SET_PHONE, PENDING_PHONE_REQUEST, SUCCESS_PHONE_REQUEST, ERROR_PHONE_REQUEST } from '../reducers/phone-reducer';
import SendingEvents from '../utils/sendEvents';

const SE = new SendingEvents();

export const updatePhone = (phoneNumber)=>{
  return {
    type: SET_PHONE,
    payload: phoneNumber
  }
}

export const phoneCall = (data) => (dispatch) => {
  dispatch({ type: PENDING_PHONE_REQUEST });
  SE.dispatchEvent({eventType:'CallNumber',additionalData:{...data}},true)
    .then(data => dispatch({ type: SUCCESS_PHONE_REQUEST, payload: data }))
    .catch(err => dispatch({ type: ERROR_PHONE_REQUEST, payload: err.message }));
}