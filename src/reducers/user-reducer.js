export const SET_TOKEN = "set:token";

export const PENDING_CALL_REQUEST = "eventCall:pending";
export const SUCCESS_CALL_REQUEST = "eventCall:success";
export const ERROR_CALL_REQUEST = "eventCall:error";
export const COMPLETED_CALL_REQUEST = "eventCall:completed";

const userInitialState = {
  token: '',
  isPending: false,
  received: false,
  error: null,
}

export default function userReducer(state = userInitialState, { type, payload }) {
  switch (type) {
    case SET_TOKEN:
      return { ...state, token: payload };
    case PENDING_CALL_REQUEST:
      return { ...state, isPending: true, received: false };
    case SUCCESS_CALL_REQUEST:
      return { ...state, isPending: false, received: true };
    case ERROR_CALL_REQUEST:
      return {
        ...state,
        isPending: false,
        received: false,
        error: payload
      };
    case COMPLETED_CALL_REQUEST:
      return { ...state, isPending: false, error: null, received: false };
    default:
      return state;
  }
}