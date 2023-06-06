import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const route = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
    const searchKeyword = event.target.elements.search.value;
    route(`/student-info/${searchKeyword}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-primary-50 flex items-center px-4 py-2 rounded-lg w-full"
    >
      <input
        name="search"
        className="bg-transparent w-full outline-none"
        type="text"
        placeholder="Search ..."
      />
      <button className="outline-none">
        <RiSearchLine />
      </button>
    </form>
  );
};
export default Search;
