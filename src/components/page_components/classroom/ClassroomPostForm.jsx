import React, { useState } from "react";
import {MdDoneAll} from "react-icons/md"
import {GiCrossMark} from "react-icons/gi"

const ClassroomPostForm = ({ showForm }) => {
  const [imglink, setImglink] = useState(false);
  const [allow, setAllow] = useState(null);
  const onSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.image.value;
    const text = form.text.value;
    const subOption = form.subOption.value;

    const formInfo = {
      img,
      text,
      subOption,
    };
    console.log(formInfo);
  };
  return (
    <div
      className={`w-full bg-white rounded-lg p-4 ${
        showForm ? null : "hidden"
      } `}
    >
      <form
        onSubmit={onSubmitForm}
        className="flex flex-col gap-4 items-center"
      >
        <div className="w-full flex flex-col items-center">
          <img
            className={`max-h-[400px] max-w-[400px] ${
              imglink ? null : "hidden"
            } `}
            src={`${imglink}`}
            alt=""
          />
          <div className="flex flex-col w-full">
            <label htmlFor="image">Image</label>
            <input
              className="border-b-2 border-b-primary-500 bg-gray-100 rounded-lg p-2 w-full outline-none"
              onBlur={(e) => setImglink(e.target.value)}
              placeholder="image link here"
              type="text"
              name="image"
              id="image"
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="text">Text</label>
          <textarea
            className="border-b-2 border-b-primary-500 bg-gray-100 rounded-lg p-2 outline-none"
            placeholder="Enter your text"
            name="text"
            id="text"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className={`flex items-center gap-4 ${allow?'text-green-500':'text-red-500'} font-bold text-lg`}>
          <label htmlFor="subOption">Submit option</label>
          <input onClick={()=>setAllow(!allow)} type="checkbox" name="subOption" className="hidden" id="subOption" />
          {
            allow?<MdDoneAll/>:<GiCrossMark/>
          }

        </div>
        <button className="w-fit p-2 px-10 animation hover:bg-gray-200 border-2 border-primary-500 text-primary-500 rounded-lg text-lg">
          Post
        </button>
      </form>
    </div>
  );
};

export default ClassroomPostForm;
