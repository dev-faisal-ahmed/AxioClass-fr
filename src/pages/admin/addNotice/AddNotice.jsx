import React, { useState } from "react";
import AdminLayout from "../../../layout/AdminLayout";
import NoticeForm from "../../../components/page_components/noticeForm/NoticeForm";
import NoticeCard from "../../../components/page_components/noticeCard/NoticeCard";
import Modal from "../../../components/shared/modal/Modal";

const AddNotice = () => {
  const [noticeForm,setNoticeForm] = useState(false)
  return (
    <AdminLayout pageName={"Notice"}>
      <div>
        <button onClick={()=>{setNoticeForm(!noticeForm)}} className="bg-[#7A68EC] hover:bg-[#22ca54] animation p-2 rounded-lg font-bold text-white fixed">
          Add Notice
        </button>
      </div>

      <Modal modalState={noticeForm} setModalState={setNoticeForm} title={"Add Notice"} >
      <div className="">
      <NoticeForm noticeForm={noticeForm} setNoticeForm={setNoticeForm} />
      </div>
      </Modal>

      <div>
        <NoticeCard/>
      </div>
    </AdminLayout>
  );
};

export default AddNotice;
