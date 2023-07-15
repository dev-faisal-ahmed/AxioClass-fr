import React, { useEffect, useState } from 'react';
import Input from '../../shared/form/Input';
import Dropdown from '../../shared/form/Dropdown';
import { serverAddress } from '../../../data/serverAddress';
import { postReq } from '../../../utils/postReq';
import { toast } from 'react-hot-toast';
import { toastConfig } from '../../../utils/toastConfig';
import { useActivities } from '../../../hooks/activities/useActivities';
import { useClassroom } from '../../../hooks/classroom/useClassroom';

const CreateClassForm = ({ setClassModal }) => {
  const { refetch: activitiesRefetch } = useActivities();
  const { refetch: classroomsRefetch } = useClassroom();

  const [className, setClassName] = useState('');
  const [img, setImg] = useState('');
  const [dept, setDept] = useState('');
  const [intake, setIntake] = useState('');
  const [instructor, setInstructor] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [credit, setCredit] = useState(0);
  const [hours, setHours] = useState(0);

  // list
  const [instructorList, setInstructorList] = useState([]);
  const [courseCodeList, setCourseCodeList] = useState([]);

  useEffect(() => {
    const url = `${serverAddress}/classroom/creation-info/${dept}/${intake}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.okay) {
          setCourseCodeList(res.data.courseCodeList);
          setInstructorList(res.data.teacherInfoList.map((t) => t.name));
        } else {
          setCourseCodeList([]);
          setInstructorList([]);
          toast.error('Not found!', toastConfig);
        }
      });
  }, [dept, intake]);

  const createClass = (e) => {
    e.preventDefault();
    const classRoomInfo = {
      className,
      img,
      dept,
      intake,
      instructor,
      courseCode,
      credit,
      hours,
    };

    // sending data to create class
    const url = `${serverAddress}/classroom/add`;
    fetch(url, postReq(classRoomInfo))
      .then((res) => res.json())
      .then((res) => {
        if (!res || res?.okay === false) {
          toast.error(res.msg, toastConfig);
        } else {
          toast.success('Classroom created', toastConfig);
          setClassModal(false);
          activitiesRefetch();
          classroomsRefetch();
        }
      });
  };
  return (
    <form className="grid gap-5 p-2" onSubmit={createClass}>
      <div className="grid grid-cols-2 gap-5">
        <Input
          label={'Classname'}
          placeholder={'Give a classroom name'}
          setValue={setClassName}
        />
        <Input
          label={'img'}
          placeholder={'Enter a valid image link'}
          setValue={setImg}
        />
        <Dropdown
          label={'department'}
          options={['CSE', 'EEE', 'LAW']}
          setValue={setDept}
        />
        <Dropdown
          label={'intake'}
          options={[44, 45, 46, 47, 48]}
          setValue={setIntake}
        />
        <Dropdown
          label={'Instructor'}
          options={instructorList}
          setValue={setInstructor}
        />
        <Dropdown
          label={'Course code'}
          options={courseCodeList}
          setValue={setCourseCode}
        />{' '}
        <Input
          label={'Credit'}
          type={'number'}
          placeholder={'Total credit'}
          setValue={setCredit}
        />
        <Input
          label={'Hours'}
          type={'number'}
          placeholder={'Total weekly hours'}
          setValue={setHours}
        />
      </div>
      <button
        type="submit"
        className="border w-fit mx-auto px-3 py-1.5 rounded-md bg-primary-600 text-white hover:bg-primary-700"
      >
        Create Classroom
      </button>
    </form>
  );
};

export default CreateClassForm;
