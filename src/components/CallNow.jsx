import React from 'react';
import Loading from './Loading';
import Card from './Card';

const CallNow = props => {
  return (
    <Card title={props.title} footer={props.footer}>
      <form className='form-call' onSubmit={(evt) => { evt.preventDefault(); props.callNow({ eventType:'CallNow'}) }}>
        <div className="form-call__group">
          <button disabled={!props.token} className="btn btn--primary" type="submit">Zadzwoń teraz</button>
        </div>
      </form>
    </Card>
  )
};

const CallLoading = (props) => {
  const title = props.waiting || 'Oczekiwanie na potwierdzenie';
  const footer = props.footer || 'Footer 1';
  return (
    <Card title={title} footer={footer}>
      <Loading name="ring" />
    </Card>
  );
};

const CallConfirmed = (props) => {
  const title = props.confirmed || 'Potwierdzenie połączenia';
  const footer = props.footer || 'Footer 1';

  return (
    <Card title={title} footer={footer} extraClass='slideInSlow' >
      {props.phoneNumber ? <h2>{props.phoneNumber}</h2> : null}
      <button className="btn btn--primary btn--confirm" type="button" onClick={() => { props.closeConfirm(); props.togglePopup(); }}>OK</button>
    </Card>
  );
};


const CallError = (props) => {
  const title = props.error || 'Błąd połączenia połączenia';
  const footer = props.footer || 'Footer 1';

  return (
    <Card title={title} footer={footer} extraClass='slideInSlow' >
      <button className="btn btn--primary btn--confirm" type="button" onClick={() => { props.closeConfirm(); props.togglePopup(); }}>OK</button>
    </Card>
  );
};

export { CallNow as default, CallLoading, CallConfirmed, CallError };