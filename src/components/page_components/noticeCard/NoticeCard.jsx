import React from "react";
import { noticeData } from "../../../fake_data/noticeData";
import {AiTwotoneDelete} from "react-icons/ai"

const NoticeCard = () => {
  return (
    <div className="w-fulls flex flex-col gap-6 items-center">
      {noticeData.map((item,index)=>
        <div className="">
          
        </div>)
      }
    </div>
  );
};

export default NoticeCard;
