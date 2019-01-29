import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { updatePhone, phoneCall } from '../actions/phone-actions';

class FormNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        phone: ''
      },
      disabled: true
    }
  }

  onChange = (evt) => {
    if (evt.target.checkValidity() && evt.target.name === 'phone') {
      this.props.updatePhone(evt.target.value);
    }
    this.setState({ fields: { [evt.target.name]: evt.target.value } });
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      fields: {
        phone: ''
      },
      disabled: true
    });
    this.props.callNow(this.state.fields);
  }

  onFormChange = (evt) => {
    (evt.currentTarget.checkValidity()) ?
      this.setState({
        disabled: false
      })
      :
      this.setState({
        disabled: true
      });
  }
  componentDidMount(){
    if(this.props.phone)
    this.setState({
      fields: { phone : this.props.phone },
      disabled: false
    });
  }
  render() {
    return (
      <Card title={this.props.title} footer={this.props.footer}>
        <form className='form-call' onSubmit={this.onSubmit} onChange={this.onFormChange}>
          <div className='form-call__group'>
            <div className="form-call__icon form-call__icon--phone"></div>
            <input className="form-call__input" id="phone" name="phone" type="text"
              pattern="((\((\+\d{2}\)?\s))?\d{3}-\d{2}-\d{2}\b)|((\((\+\d{2}\)?\s))?(\d{3}-?){3}\b)" placeholder="Nr telefonu" required="required" value={this.state.fields.phone} onChange={this.onChange} />
            <label htmlFor="phone" className="form-call__label">Nr telefonu</label>
          </div>
          <div className="form-call__group">
            <button disabled={this.state.disabled} className="btn btn--primary" type="submit">Zadzwoń teraz</button>
          </div>
        </form>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  phone: state.phone.phoneNumber,
});

const mapActionsToProps = (dispatch) => ({
  callNow: (data) => dispatch(phoneCall(data)),
  updatePhone: (params) => dispatch(updatePhone(params))
});

export default connect(mapStateToProps, mapActionsToProps)(FormNow);