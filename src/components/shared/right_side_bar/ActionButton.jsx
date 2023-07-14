import React from 'react';
import { Link } from 'react-router-dom';

const ActionButton = ({ icon, title, link, onClick }) => {
  return (
    <Link
    onClick={onClick}
      to={link}
      className="p-4 border border-primary-100 rounded-lg hover:shadow-xl hover:shadow-primary-100 hover:border-primary-300 transition"
    >
      <div className="text-3xl child:mx-auto text-primary-600">{icon}</div>
      <h3 className="mt-2 text-center text-sm font-semibold text-primary-900">
        {title.split(' ')[0]} <br />
        {title.split(' ')[1]}
      </h3>
    </Link>
  );
};

export default ActionButton;
