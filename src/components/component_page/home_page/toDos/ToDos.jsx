import React, { useEffect, useState } from 'react';
import todos from "./todos.css"
import { Events } from './events/Events';

export const ToDos = () => {
  
  const [today , setToday] =useState("")
  const [events , setEvents] =useState("")
  useEffect(()=>{
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    setToday(formattedDate)

    const fakeData = {
      "2023-05-05": [
        { title: "Mid Exam", tag: "exam" },
        { title: "Fee", tag: "financial" }
      ],
      "2023-05-06": [
        { title: "Meeting with John", tag: "class" },
        { title: "Gym", tag: "class" }
      ],
      "2023-05-07": [
        { title: "Project deadline", tag: "exam" },
        { title: "Shopping", tag: "class" }
      ]
    };
    setEvents(fakeData);
  },[])
  return (
    <div className='toDos__body h-full mt-30'>
      <div className='toDos__calender--before'>
      <div className='toDos__today flex text-center'>
      {today}
      </div>
      </div>
      <div className='toDos__events flex flex-col toDos__gap-20 mt-30'>
      {Object.keys(events).map(date => (
        <div key={date}>
        <h4 className='toDos__color'>{date}</h4>
        <ul className='flex flex-col toDos__gap-20'>
          {events[date].map((event,index) => (
            <Events key={index} event={event}/>
          ))}
        </ul>
      </div>
      ))}
    </div>
    </div>
  );
};