import React from 'react';
import EventTimeline from './EventTimeline';

const Upcoming = () => {
  return (
    <div className="border border-primary-50 rounded-xl p-6 grid gap-5">
      {/* Top titlebar */}
      <div className="flex justify-between items-center">
        <h1 className="text-blue-900 text-lg font-bold">Upcoming</h1>

        {/* Right side select option */}
        <div className="border pr-2 py-1 rounded-lg">
          <select className='pl-2' name="select-day" id="select-day">
            <option value="Today" selected>
              Today
            </option>
            <option value="Tomorrow">Tomorrow</option>
            <option value="2 days">2 days</option>
            <option value="1 week">1 week</option>
            <option value="1 month">1 month</option>
          </select>
        </div>
      </div>

      {/* Date */}
      <p className="text-gray-500 mb-2">Monday, 15 May</p>

      {/* Event timeline */}
      <div className='grid gap-3'>
        <EventTimeline />
        <div className="h-6 ml-3 w-px border-l border-dashed border-gray-400"></div>
        <EventTimeline />
        <div className="h-5 ml-3 w-px border-l border-dashed border-gray-400"></div>
        <EventTimeline />
      </div>
    </div>
  );
};

export default Upcoming;
