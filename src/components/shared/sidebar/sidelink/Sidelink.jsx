import React from 'react';
import './sidelink.css';
import { Link } from 'react-router-dom';

const Sidelink = ({ active, name, icon }) => {
  return (
    <Link
      to={'/' + name}
      className={'sidelink__root ' + (active ? 'sidelink__root--active' : '')}
    >
      <div className="sidelink__icon">{icon}</div>

      <p className="sidelink__name">{name}</p>
    </Link>
  );
};

export default Sidelink;
