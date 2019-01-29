export const PENDING_EVENT_REQUEST = "event:pending";
export const SUCCESS_EVENT_REQUEST = "event:success";
export const ERROR_EVENT_REQUEST = "event:error";
export const COMPLETED_EVENT_REQUEST = "event:completed";


const eventInitialState = {
  eventType: '',
  isPending: false,
  received: false,
  error: null
}

export default function eventReducer(state = eventInitialState, { type, payload }) {
  switch (type) {
    case PENDING_EVENT_REQUEST:
      return { ...state, isPending: true, eventType: payload, received: false };
    case SUCCESS_EVENT_REQUEST:
      return { ...state, isPending: false, received: true };
    case ERROR_EVENT_REQUEST:
      return { ...state, isPending: false, error: payload, received: false };
    case COMPLETED_EVENT_REQUEST:
      return {
        eventType: '',
        isPending: false,
        received: true,
        error: null
      };
    default:
      return state;
  }
}