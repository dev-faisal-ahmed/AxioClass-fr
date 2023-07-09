import React, { useState } from "react";
import ClassroomPostForm from "./ClassroomPostForm";
import ClassroomFeedCard from "./ClassroomFeedCard";

const ClassroomFeeds = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="flex flex-col gap-6">
      <div
        style={{
          backgroundImage: `url(https://releases.kialo-edu.com/wp-content/uploads/sites/15/2023/04/00-Kialo-Blog-GoogleClassroom-Cover-1.png)`,
        }}
        className="bg-white rounded-xl shadow-md bg-cover bg-center pt-20"
      >
        <div className="flex justify-between items-end w-full p-6">
          <div className="flex items-end gap-6">
            <div
              style={{
                backgroundImage: `url(https://e0.pxfuel.com/wallpapers/392/773/desktop-wallpaper-deathpool-marvel-art-drawings-deadpool-artwork-polygon-art-deadpool-polygon.jpg)`,
              }}
              className="w-24 h-24 bg-cover bg-center border-2 border-primary-500 rounded-2xl mb-[-50px]"
            ></div>
          </div>
        </div>
        <div className="flex p-4 pt-6 pr-6 border-b-2 bg-white justify-between items-center">
          <div className="flex font-semibold gap-4 ">
            <div>CSE-101</div>
            <div>Intake: 46</div>
            <div>Section: 01</div>
          </div>
          <div className="pb-3 flex">
            <div
              style={{
                backgroundImage: `url(https://flxt.tmsimg.com/assets/p9086375_i_v8_aa.jpg)`,
              }}
              className="mr-[-10px] w-10 h-10 bg-white rounded-full bg-cover bg-center"
            ></div>
            <div
              style={{
                backgroundImage: `url(https://itsastampede615821596.files.wordpress.com/2021/03/review-tom-and-jerry-2021-movie.jpg)`,
              }}
              className="mr-[-10px] w-10 h-10 bg-white rounded-full bg-cover bg-center"
            ></div>
          </div>
        </div>
        <div className="flex w-full justify-start gap-6 text-gray-500 bg-white rounded-b-xl p-2 px-4">
          <div>Task</div>
          <div>Student</div>
          <div>Result</div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="w-full flex flex-col gap-4"></div>
        <div className="w-full flex flex-col gap-6">
          <ClassroomPostForm showForm={showForm} setShowForm={setShowForm} />
          <div className="w-full flex flex-col gap-4">
            <ClassroomFeedCard />
            <ClassroomFeedCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomFeeds;
