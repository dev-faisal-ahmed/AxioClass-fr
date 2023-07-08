import React from 'react';
import './navlink.css';
import { Link } from 'react-router-dom';

const Navlink = ({ active, name, icon }) => {
  return (
    <Link
      to={'/' + name}
      className={'navlink__root ' + (active ? 'navlink__root--active' : '')}
    >
      <div className="navlink__icon">
        {icon}
      </div>

      <p className="navlink__name">{name}</p>
    </Link>
  );
};

export default Navlink;
