import React, { Component } from 'react';
import { CallLoading, CallConfirmed, CallError } from '../components/CallNow';
import FormNow from '../components/FormNow';
import { COMPLETED_PHONE_REQUEST } from '../reducers/phone-reducer';
import { compose } from 'redux';
import { withEither } from '../utils/hocs';
import { connect } from 'react-redux';

const conditionalRendering = compose(
  withEither(props => props.phoneIsCalling, CallLoading),
  withEither(props => props.phoneState, CallConfirmed),
  withEither(props => props.phoneError, CallError)
)

class FormNowSm extends Component {
  render() {
    const FormNowEnchanced = conditionalRendering(FormNow);
    return (
      <div className='g-m-content'>
        <FormNowEnchanced {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  phoneState: state.phone.received,
  phoneIsCalling: state.phone.isPending,
  phoneError: state.phone.error
});

const mapActionsToProps = (dispatch) => ({
  closeConfirm: () => dispatch({ type: COMPLETED_PHONE_REQUEST })
});

export default connect(mapStateToProps, mapActionsToProps)(FormNowSm);