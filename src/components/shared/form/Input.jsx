import React from 'react';

const Input = ({ label, type, placeholder, setValue }) => {
  return (
    <div className="flex flex-col gap-2 w-full text-gray-600">
      <label
        htmlFor={label}
        className="capitalize text-sm text-primary-900"
      >
        {label}
      </label>
      <input
        type={type ? type : 'text'}
        placeholder={placeholder}
        id={label}
        min={0}
        required
        onChange={(e) => setValue(e.target.value)}
        className="border border-primary-100 py-1.5 px-3 rounded-md focus:outline outline-primary-400"
      />
    </div>
  );
};

export default Input;
