import React from "react";
import { RiSearchLine } from "react-icons/ri";

const Search = () => {
  return (
    <div className="bg-primary-50 flex items-center px-4 py-2 rounded-lg w-full">
      <input
        className="bg-transparent w-full outline-none"
        id="search"
        type="text"
        placeholder="Search ..."
      />
      <label htmlFor="search">
        <RiSearchLine />
      </label>
    </div>
  );
};
export default Search;
