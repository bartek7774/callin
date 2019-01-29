import React from 'react';
import CallNow,{ CallLoading, CallConfirmed, CallError } from '../components/CallNow';
import { COMPLETED_CALL_REQUEST } from '../reducers/user-reducer';
import { compose } from 'redux';
import { withEither } from '../utils/hocs';
import { connect } from 'react-redux';
import { callNow} from '../actions/user-actions';

const conditionalRendering = compose(
  withEither(props => props.isPending, CallLoading),
  withEither(props => props.confirmReceived, CallConfirmed),
  withEither(props => props.errorCode, CallError)
)

const CallNowSm = props => {
  const CallNowEnchanced = conditionalRendering(CallNow);
  return (
    <div className='g-m-content'>
      <CallNowEnchanced {...props}/>
    </div>
  )
};

const mapStateToProps = state => ({
  confirmReceived: state.user.received,
  isPending: state.user.isPending,
  errorCode: state.user.error
});

const mapActionsToProps = (dispatch) => ({
  callNow: (data)=> dispatch(callNow(data)),
  closeConfirm: () => dispatch({ type: COMPLETED_CALL_REQUEST })
});

export default connect(mapStateToProps, mapActionsToProps)(CallNowSm);