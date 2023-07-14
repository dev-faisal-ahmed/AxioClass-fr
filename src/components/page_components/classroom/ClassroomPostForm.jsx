import React, { useState } from "react";
import { ImImages } from "react-icons/im";

const ClassroomPostForm = ({ showForm,setShowForm}) => {
  const [imglink, setImglink] = useState(false);
  const [allow, setAllow] = useState(null);
  const onSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.image.value;
    const text = form.text.value;

    const formInfo = {
      img,
      text,
      subOption,
    };
    console.log(formInfo);
  };
  return (
    <div
    onClick={() => setShowForm(true)}
      className={`w-full px-4 py-2 flex gap-4 bg-white rounded-lg animation ${
        showForm ? "p-4" : "h-[65px] overflow-hidden"
      } `}
    >
      <div
        style={{
          backgroundImage: `url(https://e0.pxfuel.com/wallpapers/392/773/desktop-wallpaper-deathpool-marvel-art-drawings-deadpool-artwork-polygon-art-deadpool-polygon.jpg)`,
        }}
        className="w-12 h-12 border-2 border-primary-500 rounded-full bg-cover bg-center"
      ></div>
      <form
        onSubmit={onSubmitForm}
        className="flex flex-col gap-4 items-center w-full"
      >
        <div
          className={`w-full flex flex-col items-center ${
            allow ? null : "hidden"
          }`}
        >
          <img
            className={`max-h-[400px] max-w-[400px] ${
              imglink ? null : "hidden"
            } `}
            src={`${imglink}`}
            alt=""
          />
          <div className="flex flex-col w-full">
            {/* <label htmlFor="image">Image</label> */}
            <input
              className=" bg-gray-100 p-2 w-full outline-none placeholder:text-primary-500 rounded-md"
              onBlur={(e) => setImglink(e.target.value)}
              placeholder="image link here"
              type="text"
              name="image"
              id="image"
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          {/* <label htmlFor="text">Text</label> */}
          <textarea
            className={` p-2 outline-none placeholder:text-primary-500 ${showForm?'bg-gray-100':'bg-white'} rounded-md`}
            placeholder="Make a announcement to students"
            name="text"
            id="text"
            cols="30"
            rows="2"
          ></textarea>
        </div>
        <div className="w-full flex items-center justify-between">
          <div
            className={`flex items-center gap-4 ${
              allow ? "text-green-500" : "text-gray-500"
            } text-sm rounded-full p-2 cursor-pointer`}
            onClick={() => setAllow(!allow)}
          >
            <ImImages size={20} />
            <span>Add image</span>
          </div>
          <button className="w-fit p-1 px-10 animation hover:bg-gray-200 border-2 border-primary-500 text-primary-500 rounded-lg text-lg">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClassroomPostForm;
