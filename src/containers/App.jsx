import React, { Component } from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux';

import { getToken } from '../actions/user-actions';
import { sendEvent } from '../actions/event-actions';

import MESSAGES from '../utils/messages';

class App extends Component {
  render() {
    return (
      <MainPage {...this.props} MESSAGES={MESSAGES} />
    );
  }
}

const mapStateToProps = state => ({
  token: state.user.token
});

const mapActionsToProps = (dispatch) => ({
  getToken: ()=> dispatch(getToken()),
  sendServerEvent: (data)=> dispatch(sendEvent(data))
});


export default connect(mapStateToProps, mapActionsToProps)(App);

