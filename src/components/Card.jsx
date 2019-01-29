import React from 'react';

export default ({ title, footer, children }) => (
  <div className='card'>
    <div className='card__header'>
      <h2>{title}</h2>
    </div>
    <div className='card__content'>
      {children}
    </div>
    <div className='card__footer'>
      <p>{footer}</p>
    </div>
  </div>
);