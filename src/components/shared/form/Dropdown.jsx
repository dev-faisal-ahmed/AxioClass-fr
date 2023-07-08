import React from 'react';

const Dropdown = ({ options, setValue, label }) => {
  return (
    <div className="w-full flex flex-col gap-2 text-gray-600">
      <label htmlFor={label} className="capitalize text-sm text-primary-900">
        {label}
      </label>
      <div className="border border-primary-100 pr-2 rounded-md w-full">
        <select
          name="searchType"
          id="searchType"
          onChange={(e) => setValue(e.target.value)}
          className="outline-none p-2 w-full capitalize"
        >
          <option value="" className="capitalize">
              Choose {label}
            </option>
          {options ? (
            options.map((label) => (
              <option value={label} className="capitalize">
                {label}
              </option>
            ))
          ) : (
            <option value="" className="capitalize">
              No option found!
            </option>
          )}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
