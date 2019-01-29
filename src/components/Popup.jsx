import React from 'react';

export default ({ show, children, togglePopup }) => (
  <div className={`popup-starter ${show ? 'active' : ''}`}>
    <div className='popup-starter__content'>
      <a href='' onClick={(evt)=>{evt.preventDefault(); togglePopup() }} className='popup-starter__close'>&times;</a>
      {children}
    </div>
  </div>
);