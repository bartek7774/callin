import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withEither } from '../utils/hocs';
import { callNow } from '../actions/user-actions';
import { phoneCall } from '../actions/phone-actions';
import { COMPLETED_PHONE_REQUEST } from '../reducers/phone-reducer';
import { COMPLETED_CALL_REQUEST } from '../reducers/user-reducer';

const withConditionalRenderingCalling = compose(
  withEither(props => props.errorCode||props.phoneError, (props) =>{ 
    return (
    <React.Fragment>
      <p className='call-starter__greet'>
        {props.messages.main.errorTitle}
      </p>
      <p className='call-starter__message'>
        {props.messages.main.error}
      </p>
    </React.Fragment>
  )}),
  withEither(props => props.phone, (props) => (
    <React.Fragment>
      <p className='call-starter__greet'>
        {props.messages.second.greet1}
      </p>
      <p className='call-starter__message'>
        {props.messages.second.question2(props.phone)}
      </p>
    </React.Fragment>
  )),
  withEither(props => (props.phoneState || props.confirmReceived), (props) => (
    <React.Fragment>
      <p className='call-starter__greet'>
        {props.messages.main.confirmTitle}
      </p>
      <p className='call-starter__message'>
        {props.messages.main.confirmSmall}
      </p>
    </React.Fragment>
  )),
  withEither(props => props.token, (props) => (
    <React.Fragment>
      <p className='call-starter__greet'>
        {props.messages.second.greet1}
      </p>
      <p className='call-starter__message'>
        {props.messages.main.question1(props.phone)}
      </p>
    </React.Fragment>
  )),
);

class InfoCard extends Component {

  render() {
    const Enhc = withConditionalRenderingCalling((props) => (
      <React.Fragment>
        <p className='call-starter__greet'>
          {props.messages.second.greet1}
        </p>
        <p className='call-starter__message'>
          {props.messages.second.question1}
        </p>
      </React.Fragment>
    ));
    return (
      <div className={`call-starter__info ${this.props.show ? '' : 'hide'}`}>
        <a href='#close' onClick={this.props.onClose} className='call-starter__info-close'>&times;</a>

        <Enhc {...this.props} />

        {(this.props.phoneState || this.props.confirmReceived || this.props.errorCode || this.props.phoneError) ? (
          <div className="call-starter__actions">
            <a href="#close" className="btn btn--message " onClick={(evt) => {
              evt.preventDefault();
              this.props.closeConfirm() ; this.props.closeTokenConfirm();
            }}>{this.props.messages.main.buttonSmallConf}</a>
          </div>
        ) : (this.props.token || this.props.phone) ?
            (
              <div className="call-starter__actions">
                <a href="#close" className="btn btn--message " onClick={(evt) => {
                  evt.preventDefault();
                  this.props.token ? this.props.callNow({ eventType: 'CallNow' }) : this.props.phone ? this.props.phoneCall({ phone: this.props.phone }) : console.log('No phone number');
                  this.props.togglePopup();
                }}>{this.props.messages.second.buttonSmall}</a>
              </div>
            )
            : !this.props.phone ?
              (
                <div className="call-starter__actions">
                  <a href="#close" className="btn btn--message " onClick={(evt) => {
                    evt.preventDefault();
                    this.props.togglePopup();
                  }}>{this.props.messages.second.buttonSmallTel}</a>
                </div>
              ) : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  confirmReceived: state.user.received,
  phoneState: state.phone.received,
  errorCode: state.user.error,
  phoneError: state.phone.error,
  phone: state.phone.phoneNumber,
  token: state.user.token
});

const mapActionsToProps = (dispatch) => ({
  phoneCall: (data) => dispatch(phoneCall(data)),
  callNow: (data) => dispatch(callNow(data)),
  closeConfirm: () => dispatch({ type: COMPLETED_PHONE_REQUEST }),
  closeTokenConfirm: () => dispatch({ type: COMPLETED_CALL_REQUEST })
});

export default connect(mapStateToProps, mapActionsToProps)(InfoCard);