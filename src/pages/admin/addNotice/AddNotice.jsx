import React, { useState } from 'react';
import AdminLayout from '../../../layout/AdminLayout';
import NoticeForm from '../../../components/page_components/noticeForm/NoticeForm';
import Modal from '../../../components/shared/modal/Modal';
import NoticeBoard from '../../../components/page_components/noticeBoard/NoticeBoard';

const AddNotice = () => {
  
  
  return (
    <AdminLayout pageName={'Notice'}>
      <div>
        <NoticeBoard />
      </div>
    </AdminLayout>
  );
};

export default AddNotice;
