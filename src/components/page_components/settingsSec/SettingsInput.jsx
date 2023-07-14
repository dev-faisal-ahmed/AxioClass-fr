import React from "react";
import {FaRegEye} from 'react-icons/fa'
const SettingsInput = ({ placeholder, type, name, id, defaultValue,icon,show,setShow }) => {
  return (
    <div className="w-full flex">
      <input
        required
        className="w-full border border-[#7A68EC] border-r-0 rounded-l-md p-2 outline-none"
        placeholder={placeholder}
        type={type}
        name={name}
        defaultValue={defaultValue}
        id={id}
      />
      <span onClick={()=>setShow(!show)} className="border border-[#7A68EC] border-l-0 rounded-r-md p-2">{icon}</span>
    </div>
  );
};

export default SettingsInput;
