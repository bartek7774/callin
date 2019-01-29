import uuid from "js-uuid";
import axios from 'axios';

export default class SendingEvents {
  constructor(restAPI, expLink) {
    this.restAPI = restAPI || process.env.REACT_APP_REST_API;
    this.expLink = expLink || process.env.REACT_APP_EXP_LINK || window.location.href;
    this.token = '';
    this.link = '';
    this.extractToken();
  }
  extractToken() {
    if(!process.env.REACT_APP_REGEX_URL) return '';
    let res = new RegExp(process.env.REACT_APP_REGEX_URL,'gi').exec(this.expLink);
    if (res && res.length === 3) {
      this.link = res[1];
      this.token = res[2]; 
    } else {
      this.token = '';
      this.link = '';
      console.log('Niepoprawny adres:', this.expLink);
    }
    return this.token;
  }

  dispatchEvent(data,anon=false) {
    return this._sendData(this.restAPI, data, anon).then(res => res.data);
  }
  _sendData(url, data, anon) {
    if (this.token || anon) {
      let dataToSend = Object.assign({}, { eventDate: new Date().getTime(), uuid: uuid.v4() }, data);
      if(!anon) dataToSend={...dataToSend, token: this.token};
      return axios({
        method: 'post',
        url: '' + url,
        data: dataToSend
      });
    } else {
      return Promise.reject({message:'No token found.'});
    }
  }

  _saveData() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    sessionStorage ? sessionStorage.setItem('client', JSON.stringify(data)) : console.log('Browser does not support web storage.');
  }
  _getData() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "client";
    return sessionStorage ? JSON.parse(sessionStorage.getItem(key)) : console.log('Browser does not support web storage.');
  }

  _clearStorage(key) {
    (sessionStorage) ? sessionStorage.removeItem(key) : console.log('No such key');
  }
}
