import React, { useEffect, useState } from 'react';
import { serverAddress } from '../../../data/serverAddress';
import { getLocalUser } from '../../../utils/localStorage';
import { toastConfig } from '../../../utils/toastConfig';
import { toast } from 'react-hot-toast';
import ClassroomList from '../classroom/ClassroomList';

const TeacherClassroomList = () => {
  const [classrooms, setClassrooms] = useState([]);
  const { id } = getLocalUser();

  useEffect(() => {
    const query = `search?type=teacher&&teacherId=${id}`;
    const url = `${serverAddress}/classroom/${query}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.okay) {
          setClassrooms(res.data);
        } else {
          setClassrooms([]);
          toast.error(res.msg, toastConfig);
        }
      });
  }, []);

  console.log(classrooms);
  return (
    <div>
      <ClassroomList classrooms={classrooms} />
    </div>
  );
};

export default TeacherClassroomList;
