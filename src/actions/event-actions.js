import { PENDING_EVENT_REQUEST, SUCCESS_EVENT_REQUEST, ERROR_EVENT_REQUEST } from '../reducers/event-reducer';
import SendingEvents from '../utils/sendEvents';

const SE = new SendingEvents();

export const sendEvent = (data) => (dispatch) => {
    dispatch({ type: PENDING_EVENT_REQUEST, payload: data.eventType });
    SE.dispatchEvent(data)
      .then(data => dispatch({ type: SUCCESS_EVENT_REQUEST, payload: data }))
      .catch(err => dispatch({ type: ERROR_EVENT_REQUEST, payload: err.message }));
  }