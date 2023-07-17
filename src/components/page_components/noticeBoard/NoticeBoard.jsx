import React, { useEffect, useState } from 'react';
import { TbBellPlus } from 'react-icons/tb';
import NoticeCard from './NoticeCard';
import Modal from '../../shared/modal/Modal';
import NoticeForm from '../noticeForm/NoticeForm';
import { serverAddress } from '../../../data/serverAddress';
import { useGetNotices } from '../../../hooks/notices/useGetNotices';

const NoticeBoard = ({ restricted }) => {
  const [noticeForm, setNoticeForm] = useState(false);
  // const [notices, setNotices] = useState([]);
  const { notices } = useGetNotices();
  console.log(notices);

  // useEffect(() => {
  //   const url = `${serverAddress}/notice`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.okay) setNotices(res.data);
  //       else {
  //         toast.error(res.msg, toastConfig);
  //       }
  //     });
  // }, []);
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

        {restricted ? (
          <button
            onClick={() => {
              setNoticeForm(!noticeForm);
            }}
            className="hover:bg-primary-50 text-primary-700 px-3 py-2 rounded-lg font-semibold border border-primary-200 hover:border-primary-600 flex items-center gap-2 transition"
          >
            {' '}
            <TbBellPlus className="text-xl" /> <span>Add notice</span>
          </button>
        ) : (
          ''
        )}
      </div>

      {notices.map(({ title, category, date, description, _id }) => {
        return (
          <NoticeCard
            id={_id}
            key={_id}
            title={title}
            category={category}
            date={date}
            description={description}
            restricted={restricted}
          />
        );
      })}
    </div>
  );
};

export default NoticeBoard;
