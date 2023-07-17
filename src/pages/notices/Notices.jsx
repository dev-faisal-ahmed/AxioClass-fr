import React from 'react';
import GlobalLayout from '../../layout/GlobalLayout';
import NoticeBoard from '../../components/page_components/noticeBoard/NoticeBoard';

const Notices = () => {
  return <GlobalLayout pageName={'Notices'} body={<NoticeBoard />} />;
};

export default Notices;
