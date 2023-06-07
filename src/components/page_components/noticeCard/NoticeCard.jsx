import React from "react";
import { noticeData } from "../../../fake_data/noticeData";
import {AiTwotoneDelete} from "react-icons/ai"

const NoticeCard = () => {
  return (
    <div className="w-fulls flex flex-col gap-6 items-center">
      {noticeData.map((item,index)=>
        <div className="card flex flex-col  gap-3 max-w-[700px] w-2/3">
          <div className="flex items-center rounded-t-md px-5 py-2 justify-between bg-[#7A68EC] text-white">
          <h3 className="text-2xl font-semibold">{item.title}</h3>
          <div className="text-red-700">
          <AiTwotoneDelete size={20}/>
          </div>
          </div>
          <div className="py-2 px-5 flex flex-col gap-2">
          <p>
            {item.description}
          </p>
          <p className="text-blue-700">#{item.category}</p>
          </div>
        </div>)
      }
    </div>
  );
};

export default NoticeCard;
