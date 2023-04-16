import React from 'react';
import './globalLayout.css';

export const GlobalLayout = ({ first, second, third }) => {
  return (
    <div className="global__root">
      <div className="global__section--first">{first}</div>
      <div className="global__section--second">{second}</div>
      <div className="global__section--third">{third}</div>
    </div>
  );
};
