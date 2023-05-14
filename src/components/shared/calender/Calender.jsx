import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Calender = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  //   Template data
  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const monthdays = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  return (
    <div className="bg-white border border-primary-50 px-7 py-6 rounded-xl select-none">
      {/* Top title bar */}
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-blue-900 text-lg">
          {months[month]}, {year}
        </h1>
        {/* Icon section */}
        <div className="flex items-start gap-2 child:border child:p-1 child:rounded-lg child:cursor-pointer child-hover:text-primary-600 child-hover:border-primary-600 child:transition">
          <div>
            <IoIosArrowBack />
          </div>
          <div>
            <IoIosArrowForward />
          </div>
        </div>
      </div>

      {/* Calender grid */}
      <div>
        <div className="grid grid-cols-7 gap-4 mt-5 text-blue-900  place-items-center">
          {/* Week line */}
          {weekdays.map((day) => (
            <div className="text-xs font-semibold opacity-70">{day}</div>
          ))}
          {/* Day lines */}
          {monthdays.map((day) => (
            <div
              className={
                'text-sm px-2 py-1 rounded cursor-pointer hover:bg-primary-100 transition ' +
                (day === today ? 'bg-primary-600 hover:bg-primary-700 text-white' : '')
              }
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calender;
