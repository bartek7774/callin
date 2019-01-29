export const SET_PHONE = "phone:set";

export const PENDING_PHONE_REQUEST = "phone:pending";
export const SUCCESS_PHONE_REQUEST = "phone:success";
export const COMPLETED_PHONE_REQUEST = "phone:completed";
export const ERROR_PHONE_REQUEST = "phone:error";

const phoneInitialState = {
  phoneNumber: '',
  isPending: false,
  received: false,
  error: null
}

export default function phoneReducer(state = phoneInitialState, { type, payload }) {
  switch (type) {
    case SET_PHONE:
      return { ...state, phoneNumber: payload };
    case PENDING_PHONE_REQUEST:
      return { ...state, isPending: true, received: false };
    case SUCCESS_PHONE_REQUEST:
      return { ...state, isPending: false, phoneNumber:'', received: true };
    case COMPLETED_PHONE_REQUEST:
      return {
        phoneNumber: '',
        isPending: false,
        received: false,
        error: null
      };
    case ERROR_PHONE_REQUEST:
      return { phoneNumber:'', isPending: false, error: payload, received: false };
    default:
      return state;
  }
}