import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { serverAddress } from '../../../data/serverAddress';
import { postReq } from '../../../utils/postReq';
import { useGetNotices } from '../../../hooks/notices/useGetNotices';

const NoticeForm = ({ setNoticeForm }) => {
  console.log(setNoticeForm);
  const { refetch } = useGetNotices();
  const handleNotice = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const noticeBody = form.noticeBody.value;
    const tag = form.tag.value.toLowerCase();
    const notice = {
      title: title,
      description: noticeBody,
      category: tag,
    };

    const url = `${serverAddress}/notice/add`;
    fetch(url, postReq(notice))
      .then((res) => res.json())
      .then((res) => {
        if (!res || res?.okay === false) {
          console.log(res);
          toast.error(res.msg, toastConfig);
        }
        refetch();
        toast.success('Notice added successfully', toastConfig);
        setNoticeForm(false);
      });

    console.log(notice);
    form.reset();
  };
  return (
    <div>
      <div className="rounded-md">
        <form
          onSubmit={handleNotice}
          className="flex flex-col gap-2 bg-white p-6"
        >
          <label className="text-primary-900 font-semibold" htmlFor="title">
            Title
          </label>
          <input
            required
            className="border border-primary-200 rounded-md p-2"
            type="text"
            name="title"
            id="title"
          />
          <label
            className="text-primary-900 font-semibold"
            htmlFor="noticeBody"
          >
            Notice
          </label>
          <textarea
            required
            className="border border-primary-200 rounded-md p-2"
            name="noticeBody"
            id="noticeBody"
            cols="30"
            rows="10"
          ></textarea>
          <label className="text-primary-900 font-semibold" htmlFor="tag">
            Tag
          </label>
          <input
            required
            className="border border-primary-200 rounded-md p-2"
            type="text"
            name="tag"
            id="tag"
          />
          <button className="bg-[#7A68EC] hover:bg-[#22ca54] animation p-2 rounded-lg font-bold text-white mt-4">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoticeForm;
