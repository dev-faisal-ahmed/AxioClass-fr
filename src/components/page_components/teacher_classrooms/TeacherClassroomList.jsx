import React, { useEffect, useState } from "react";
import { serverAddress } from "../../../data/serverAddress";
import { getLocalUser } from "../../../utils/localStorage";
import { toastConfig } from "../../../utils/toastConfig";
import { toast } from "react-hot-toast";
import ClassroomList from "../classroom/ClassroomList";

const TeacherClassroomList = () => {
  const [classrooms, setClassrooms] = useState([]);
  const { name } = getLocalUser();

  useEffect(() => {
    const url = `${serverAddress}/classroom/teacher/${name}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.okay) {
          setClassrooms(res.data);
        } else {
          setClassrooms([]);
          toast.error(res.msg, toastConfig);
        }
      });
  }, []);

  return <div>{classrooms && <ClassroomList classrooms={classrooms} />}</div>;
};

export default TeacherClassroomList;
