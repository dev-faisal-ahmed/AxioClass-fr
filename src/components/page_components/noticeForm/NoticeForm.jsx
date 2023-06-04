import React from 'react';

const NoticeForm = () => {
  const handleNotice =(event)=>{
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const noticeBody = form.noticeBody.value;
    const tag = form.tag.value;
    const notice ={
      title:title,
      noticeBody:noticeBody,
      tag:tag
    }

    console.log(notice);
    form.reset();
  }
  return (
    <div>
      <div className="rounded-md bg-[#7A68EC]">
          <h3 className="text-white text-xl font-bold p-2">
            Add notice
          </h3>
      <form onSubmit={handleNotice} className='flex flex-col bg-white'>
        <label htmlFor="title">Title</label>
        <input className="border border-[#7A68EC] rounded-md p-2" type="text" name="title" id="title" />
        <label htmlFor="noticeBody">Notice</label>
        <textarea className="border border-[#7A68EC] rounded-md p-2" name="noticeBody" id="noticeBody" cols="30" rows="10"></textarea>
        <label htmlFor="tag">Tag</label>
        <input className="border border-[#7A68EC] rounded-md p-2" type="text" name="tag" id="tag" />
        <button>Post</button>
      </form>
      </div>
    </div>
  );
};

export default NoticeForm;