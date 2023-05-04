import React from 'react';
import nav from './nav.css'

const Nav = () => {
  const fkID={
    name:"Free loader",
    id:20211105015,
    sec:1,
    dept:"CSE"
  }
  return (
    <div>
      <h1>{fkID.name}</h1>
      <div className='id_container'>
        <span>ID: {fkID.id}</span>
        <span>Section: {fkID.sec}</span>
        <span>Department of: {fkID.dept}</span>
      </div>
    </div>
  );
};

export default Nav;