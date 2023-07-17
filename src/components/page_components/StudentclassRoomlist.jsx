import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { serverAddress } from "../../data/serverAddress";
import { getLocalUser } from "../../utils/localStorage";
import { toastConfig } from "../../utils/toastConfig";
import ClassroomList from "./classroom/ClassroomList";

const StudentClassroomList = () => {
  const [classrooms, setClassrooms] = useState([]);
  const { id } = getLocalUser();
  console.log(classrooms);

  useEffect(() => {
    const query = `classroom/student/${id}`;
    const url = `${serverAddress}/${query}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.okay) {
          setClassrooms(res.data);
          console.log(res.data);
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

export default StudentClassroomList;
