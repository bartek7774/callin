import React, { Component } from 'react';
import Popup from '../components/Popup';
import Starter from '../components/Starter';
import FormNowSm from './FormNowSm';
import CallNowSm from './CallNowSm';
import { compose } from 'redux';
import { withCondition } from '../utils/hocs';

const withoutTokenCall = compose(
  withCondition(props => !props.token)
);

const withTokenCall = compose(
  withCondition(props => props.token)
);

export default class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showWidget: false
    }
  }

  togglePopup = () => {
    this.setState((prev, props) => {
      return {
        showWidget: !prev.showWidget
      }
    });
  }

  componentDidMount() {
    this.props.getToken();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.token&&this.props.token!==prevProps.token){
      console.log('onload',this.props.token);
      this.props.sendServerEvent({eventType:'onload', token:this.props.token });
    }
  }

  render() {
    const MESSAGES = this.props.MESSAGES;
    const StartFormEnhanced = withoutTokenCall(FormNowSm);
    const CallNowEnhanced = withTokenCall(CallNowSm);    
    return (
      <React.Fragment>
        <Popup show={this.state.showWidget} togglePopup={this.togglePopup}>
          <StartFormEnhanced token={this.props.token} {...MESSAGES.second} togglePopup={this.togglePopup} />
          <CallNowEnhanced token={this.props.token} {...MESSAGES.main} togglePopup={this.togglePopup}/>
        </Popup>
        <Starter phone={this.props.phone} show={!this.state.showWidget} togglePopup={this.togglePopup}  {...{messages:{...MESSAGES}}} />
      </React.Fragment>
    );
  }
}