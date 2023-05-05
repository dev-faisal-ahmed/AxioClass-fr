import React from 'react';
import events from "./events.css"

export const Events = ({event}) => {
  // if (event.tag.includes("academic")) {
  //   icon = <HiAcademicCap size={25} />;
  // } else if (event.tag === "financial") {
  //   icon = <BsFillCreditCardFill size={20} />;
  // }
  let color;
  if (event.tag === "exam") {
    color = "#fe797a";
  } else if (event.tag === "class") {
    color = "#CE76FE";
  } else if (event.tag === "financial") {
    color = "#0067FF";
  }

  return (
    <>
            <li className='flex' key={event.title}>
              <div style={{backgroundColor:`${color}`}} className='events__color' ></div>
              <div className='flex flex-col center-x'>
              <span style={{fontSize:'18px'}}>Event: {event.title}</span>
              <span style={{fontSize:'15px'}}>#{event.tag}</span>
              </div>
            </li>
    </>
  );
};