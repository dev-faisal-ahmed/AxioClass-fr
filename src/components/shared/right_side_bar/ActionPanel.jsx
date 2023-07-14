import React, { useState } from 'react';
import ActionButton from './ActionButton';
// Importing icons
import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from 'react-icons/ai';
import {
  MdLibraryAdd,
  MdOutlineAddChart,
  MdOutlineNotificationAdd,
} from 'react-icons/md';

import { HiOutlineViewGridAdd } from 'react-icons/hi';
import Modal from '../modal/Modal';
import Input from '../form/Input';

const ActionPanel = () => {
  const [newSemesterModal, setNewSemesterModal] = useState(false);
  return (
    <div className="mb-12">
      {/* Modal for creating new semester*/}
      <Modal
        modalState={newSemesterModal}
        setModalState={setNewSemesterModal}
        title={'Create new semester'}
      >
        <form>
          <Input label={'Semester name'} placeholder={'Ex. Summer 2023'} />
          <div className="text-center">
            <button
              type="submit"
              className="border w-fit mt-4 px-3 py-1.5 rounded-md bg-primary-600 text-white hover:bg-primary-700"
            >
              Create Semester
            </button>
          </div>
        </form>
      </Modal>
      {/* Title */}
      <h1 className="text-2xl font-bold text-primary-900 mt-5 mb-8 capitalize text-center">
        Action center
      </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        <ActionButton
          icon={<AiOutlineUsergroupAdd />}
          title="Add Student"
          link="/add-student"
        />
        <ActionButton
          icon={<AiOutlineUserAdd />}
          title="Add Teacher"
          link="/add-teacher"
        />
        <ActionButton
          icon={<MdOutlineNotificationAdd />}
          title="Post Notice"
          link="/add-notice"
        />
        <ActionButton
          icon={<MdOutlineAddChart />}
          title="Add Payment"
          link="/fees"
        />
        <ActionButton
          icon={<HiOutlineViewGridAdd />}
          title="Create Classroom"
          link="/classroom"
        />
        <ActionButton
          icon={<MdLibraryAdd />}
          title="New Semester"
          onClick={() => setNewSemesterModal(!newSemesterModal)}
        />
      </div>
    </div>
  );
};

export default ActionPanel;
