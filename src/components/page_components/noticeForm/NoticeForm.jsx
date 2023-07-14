import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { serverAddress } from '../../../data/serverAddress';
import { postReq } from '../../../utils/postReq';
import { useGetNotices } from '../../../hooks/notices/useGetNotices';
import { BiSolidSend } from 'react-icons/bi';
import { useActivities } from '../../../hooks/activities/useActivities';

const NoticeForm = ({ setNoticeForm }) => {
  console.log(setNoticeForm);
  const { refetch } = useGetNotices();
  const { refetch:activitiesRefetch } = useActivities();
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
    setNoticeForm(false);

    const url = `${serverAddress}/notice/add`;
    fetch(url, postReq(notice))
      .then((res) => res.json())
      .then((res) => {
        if (!res || res?.okay === false) {
          console.log(res);
          toast.error(res.msg, toastConfig);
        }
        refetch();
        activitiesRefetch();
        toast.success('Notice added successfully', toastConfig);
        setNoticeForm(false);
      });

    console.log(notice);
    form.reset();
  };
  return (
    <div>
      <div className="rounded-lg">
        <form
          onSubmit={handleNotice}
          className="flex flex-col items-center gap-4 bg-white p-6"
        >
          <div className="w-full flex items-center gap-4">
            <div className="w-full">
              <label className="text-primary-900 font-semibold" htmlFor="title">
                Title
              </label>
              <input
                required
                className="border border-primary-200 rounded-md p-2 w-full bg-[#EFF0FE]"
                type="text"
                name="title"
                id="title"
              />
            </div>
            <div className="w-full">
              <label className="text-primary-900 font-semibold" htmlFor="tag">
                Tag
              </label>
              <input
                required
                className="border border-primary-200 rounded-md p-2 w-full bg-[#EFF0FE]"
                type="text"
                name="tag"
                id="tag"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label
              className="text-primary-900 font-semibold"
              htmlFor="noticeBody"
            >
              Notice
            </label>
            <textarea
              required
              className="border border-primary-200 rounded-md p-2 bg-[#EFF0FE]"
              name="noticeBody"
              id="noticeBody"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <button
            // onClick={() => setNoticeForm(false)}
            className="w-fit border bg-[#EFF0FE] border-primary-200 hover:border-primary-400 text-primary-900 hover:bg-gray-200 animation p-2 px-6 rounded-lg font-bold mt-4 flex items-center justify-center gap-3"
          >
            <span>Post</span>
            <BiSolidSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoticeForm;
