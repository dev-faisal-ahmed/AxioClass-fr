import React, { useState } from "react";
import ClassroomPostForm from "./ClassroomPostForm";
import ClassroomFeedCard from "./ClassroomFeedCard";

const ClassroomFeeds = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-xl">
        <div className="flex items-end gap-6 p-6 pt-20">
          <div
            style={{
              backgroundImage: `url(https://e0.pxfuel.com/wallpapers/392/773/desktop-wallpaper-deathpool-marvel-art-drawings-deadpool-artwork-polygon-art-deadpool-polygon.jpg)`,
            }}
            className="w-24 h-24 bg-cover bg-center border-2 border-primary-500 rounded-full"
          ></div>
          <div className="flex gap-3 pb-3">
            <div>CSE-101</div>
            <div>Intake: 46</div>
            <div>Section: 01</div>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-[20%] flex flex-col gap-4">
          <div className="flex flex-col gap-2 bg-white rounded-lg p-2">
            <span>Class code:</span>{" "}
            <span className="border-2 border-primary-500 text-primary-500 p-2 rounded text-center">
              haosuhf9
            </span>
          </div>
          <div className="w-full">
            <button
              onClick={() => setShowForm(!showForm)}
              className="w-full p-3 bg-primary-500 rounded-lg text-white font-extrabold text-lg"
            >
              Post
            </button>
          </div>
        </div>
        <div className="w-[80%] flex flex-col gap-6">
          <ClassroomPostForm showForm={showForm} />
          <div className="w-full flex flex-col gap-4">
            <ClassroomFeedCard/>
            <ClassroomFeedCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomFeeds;
