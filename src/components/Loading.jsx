import React from 'react';

export default ({ name }) =><div className={(name?`loading loading--${name}`:'')}></div>;