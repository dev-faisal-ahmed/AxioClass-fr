import React, { useState } from "react";
import AdminLayout from "../../../layout/AdminLayout";
import NoticeForm from "../../../components/page_components/noticeForm/NoticeForm";
import NoticeCard from "../../../components/page_components/noticeCard/NoticeCard";

const AddNotice = () => {
  const [noticeForm,setNoticeForm] = useState(false)
  return (
    <AdminLayout pageName={"Notice"}>
      <div>
        <button onClick={()=>{setNoticeForm(!noticeForm)}} className="bg-[#7A68EC] hover:bg-[#22ca54] animation p-2 rounded-lg font-bold text-white fixed">
          Add Notice
        </button>
      </div>

      {/* {noticeForm?
        <div onClick={()=>{setNoticeForm(!noticeForm)}} className="w-full h-full bg-slate-800/50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>:null
      } */}

      {/* {noticeForm &&
        <div className="">
      <NoticeForm noticeForm={noticeForm} setNoticeForm={setNoticeForm} />
      </div>
      } */}

      <div>
        <NoticeCard/>
      </div>
    </AdminLayout>
  );
};

export default AddNotice;
