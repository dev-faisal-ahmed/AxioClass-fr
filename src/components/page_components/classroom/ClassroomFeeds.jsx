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
        className="bg-white rounded-xl sticky top-0 shadow-md bg-cover bg-center pt-20"
      >
        <div className="flex justify-between items-end w-full p-6">
          <div className="flex items-end gap-6">
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
            <div className="pb-3 flex">
              <div style={{backgroundImage:`url(https://flxt.tmsimg.com/assets/p9086375_i_v8_aa.jpg)`}} className="mr-[-10px] w-10 h-10 bg-white rounded-full bg-cover bg-center"></div>
              <div style={{backgroundImage:`url(https://itsastampede615821596.files.wordpress.com/2021/03/review-tom-and-jerry-2021-movie.jpg)`}} className="mr-[-10px] w-10 h-10 bg-white rounded-full bg-cover bg-center"></div>
              
            </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="w-full flex flex-col gap-4">
          {/* <div className="flex flex-col gap-2 bg-white rounded-lg p-2">
            <span>Class code:</span>{" "}
            <span className="border-2 border-primary-500 text-primary-500 p-2 rounded text-center">
              haosuhf9
            </span>
          </div> */}
          <div className="w-full">
            <button
              onClick={() => setShowForm(!showForm)}
              className="w-full p-3 bg-white rounded-lg text-primary-500 text-lg shadow-sm"
            >
              Make a announcement to students
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <ClassroomPostForm showForm={showForm} />
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
