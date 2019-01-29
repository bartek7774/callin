import React, { Component } from 'react';
import InfoCard from '../containers/InfoCard';

class Starter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: true
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(!prevState.showTooltip){
      this.setState({
          showTooltip: true
      });
    }
  }

  render() {
    const { show, togglePopup } = this.props; 
    return (
      <div className={`call-starter ${show ? 'active' : 'hide'}`}>
        <button type="button" onClick={(evt) => { evt.preventDefault(); togglePopup(); this.setState({ hideTooltip: false }); }}>
          <div className='call-starter__icon'></div>
        </button>
      <InfoCard show={this.state.showTooltip} togglePopup={togglePopup} {...{messages:this.props.messages}} 
      onClose={(evt)=>{ evt.preventDefault(); this.setState({ showTooltip: false }); }} />
      </div>
    )
  }
}

export default Starter;