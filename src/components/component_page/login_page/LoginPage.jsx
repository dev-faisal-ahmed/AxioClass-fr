import React, { useState } from "react";
import "./loginPage.css";

export const LoginPage = () => {
  const [door,setDoor] = useState(false)
  const doorHandler=()=>{
    setDoor(!door)
  }
  const loginHandler=(event)=>{
    event.preventDefault(); // prevent the page from reloading
    const id = event.target[0].value; // get the value of the first input field
    const password = event.target[1].value; // get the value of the second input field
    console.log(id,password)  
  }
  return (
    <div className="login__body flex center-x center-y">
      <div className={`login__div flex flex-col justify-between w-full ${door?'h-full':'h-0'}`}>
        <div className="login__head">
          <div className="login__title">Login</div>
        </div>
        <>
          <form onSubmit={loginHandler} className="login__form flex flex-col center-y">
            <input
              placeholder="ID"
              className="login__form--input"
              type="text"
              name=""
              id=""
              required
            />
            <input
              placeholder="password"
              className="login__form--input"
              type="password"
              name=""
              id=""
              required
            />
            <button className="login__form--btn">Login</button>
          </form>
          <div className="login__footer">If you dont have an account contact admin</div>
        </>
      </div>
      <div onClick={doorHandler} className={`login__door ${door?'hidden':null}`}>Login</div>
    </div>
  );
};
