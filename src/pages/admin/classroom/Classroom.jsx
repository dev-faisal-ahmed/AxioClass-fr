import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layout/AdminLayout';
import ClassroomSearch from '../../../components/page_components/classroom/ClassroomSearch';
import ClassroomList from '../../../components/page_components/classroom/ClassroomList';
import { TbLayoutGridAdd } from 'react-icons/tb';
import Modal from '../../../components/shared/modal/Modal';
import CreateClassForm from '../../../components/page_components/classroom/CreateClassForm';
import { serverAddress } from '../../../data/serverAddress';
import { useClassroom } from '../../../hooks/classroom/useClassroom';

const Classroom = () => {
  const [classModal, setClassModal] = useState(false);
  const { classrooms, refetch } = useClassroom();
  const [searchResult, setSearchResult] = useState(false);
  // const [classrooms, setClassrooms] = useState([]);

  // useEffect(() => {
  //   const url = `${serverAddress}/classroom/get-admin`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.okay) {
  //         setClassrooms(res.data);
  //       } else {
  //         toast.error(res.msg, toastConfig);
  //       }
  //     });
  // }, []);
  return (
    <AdminLayout pageName={'Classroom'}>
      <Modal
        modalState={classModal}
        setModalState={setClassModal}
        title={'Create Classroom'}
      >
        <CreateClassForm setClassModal={setClassModal} />
      </Modal>
      <div>
        <div className="flex gap-5 justify-between items-center p-3 rounded-xl bg-white">
          <ClassroomSearch setClassrooms={setSearchResult} />
          <button
            onClick={() => {
              setClassModal(!classModal);
            }}
            className="hover:bg-primary-50 h-fit text-primary-700 px-3 py-2 rounded-lg font-semibold border border-primary-200 hover:border-primary-600 flex items-center gap-2 transition"
          >
            {' '}
            <TbLayoutGridAdd className="text-xl" />{' '}
            <span>Create Classroom</span>
          </button>
        </div>

        <ClassroomList
          classrooms={searchResult ? searchResult : classrooms?.data}
        />
      </div>
    </AdminLayout>
  );
};

export default Classroom;
