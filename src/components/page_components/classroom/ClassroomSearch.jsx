import React, { useState } from 'react';

const ClassroomSearch = () => {
  const [searchType, setSearchType] = useState('code');
  const [dept, setDept] = useState('cse');
  const [code, setCode] = useState('');
  const [teacherCode, setTeacherCode] = useState('');

  const handleSearchType = (e) => {
    setSearchType(e.target.value);
  };

  const handleDept = (e) => {
    setDept(e.target.value);
  };

  //   handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(searchType);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-5 bg-white rounded-lg"
    >
      <div className="border border-primary-100 pr-2 rounded">
        <select
          name="searchType"
          id="searchType"
          onChange={handleSearchType}
          className="outline-none p-2"
        >
          <option value="code">Code</option>
          <option value="teacher">Teacher</option>
          <option value="intake-dept">Intake-dept</option>
        </select>
      </div>

      {searchType === 'code' ? (
        <div>
          <input
            onChange={(e) => setCode(e.target.value)}
            type="text"
            placeholder="Classroom Code"
            className="border border-primary-100 p-2 px-3 rounded"
          />
        </div>
      ) : searchType === 'intake-dept' ? (
        <div className="flex gap-3">
          <div className="border border-primary-100 pr-2 rounded">
            <select
              name="dept"
              id="dept"
              onChange={handleDept}
              className="outline-none p-2"
            >
              <option value="cse">CSE</option>
              <option value="eee">EEE</option>
              <option value="law">LAW</option>
            </select>
          </div>

          <input
            type="number"
            name="intake"
            id="intake"
            min={1}
            placeholder="Intake"
            className="border border-primary-100 p-2 px-3 rounded"
          />
        </div>
      ) : (
        <div>
          <input
            onChange={(e) => setTeacherCode(e.target.value)}
            type="text"
            placeholder="Teacher Code"
            className="border border-primary-100 p-2 px-3 rounded"
          />
        </div>
      )}

      {/* submit button */}
      <button
        type="submit"
        className="bg-primary-600 text-white py-1.5 px-4 rounded-md border border-primary-300 hover:bg-primary-700 "
      >
        Search
      </button>
    </form>
  );
};

export default ClassroomSearch;
