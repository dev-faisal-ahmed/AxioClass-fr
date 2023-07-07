import React, { useState } from 'react';
import { noticeData } from '../../../fake_data/noticeData';
import { TbBellPlus } from 'react-icons/tb';
import NoticeCard from './NoticeCard';
import Modal from '../../shared/modal/Modal';
import NoticeForm from '../noticeForm/NoticeForm';

const NoticeBoard = () => {
  const [noticeForm, setNoticeForm] = useState(false);
  return (
    <div className="grid gap-4 p-5 bg-white rounded-xl border border-primary-100 shadow-xl shadow-primary-50 overflow-hidden mt-5">
      {/* Modal */}
      <Modal
        modalState={noticeForm}
        setModalState={setNoticeForm}
        title={'Add Notice'}
      >
        <div className="">
          <NoticeForm noticeForm={noticeForm} setNoticeForm={setNoticeForm} />
        </div>
      </Modal>
      {/* Top title */}
      <div className="flex items-center justify-between m-2">
        <h1 className="text-2xl font-semibold text-primary-900">
          Latest Notices
        </h1>
        <button
          onClick={() => {
            setNoticeForm(!noticeForm);
          }}
          className="hover:bg-primary-50 text-primary-700 px-3 py-2 rounded-lg font-semibold border border-primary-200 hover:border-primary-600 flex items-center gap-2 transition"
        >
          {' '}
          <TbBellPlus className="text-xl" /> <span>Add notice</span>
        </button>
      </div>

      {noticeData.map(({ title, category, date, description, id }) => {
        return (
          <NoticeCard
            key={id}
            title={title}
            category={category}
            date={date}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default NoticeBoard;
