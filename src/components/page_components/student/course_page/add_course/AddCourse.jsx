import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getLocalUser } from "../../../../../utils/localStorage";
import { serverAddress } from "../../../../../data/serverAddress";
import { toastConfig } from "../../../../../utils/toastConfig";
import AddCourseTable from "./AddCourseTable";

const AddCourses = ({ setAddCourse }) => {
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState({});
  const { id } = getLocalUser();

  useEffect(() => {
    const url = `${serverAddress}/courses/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.okay) setAllCourses(res.data);
        else if (res.userCorrupted) removeUser();
        else toast.error(res.msg, toastConfig);
      });
  }, [id]);

  return (
    <section>
      {allCourses.length !== 0 && (
        <AddCourseTable
          allCourses={allCourses}
          selectedCourses={selectedCourses}
          setSelectedCourses={setSelectedCourses}
          setAddCourse={setAddCourse}
        />
      )}
    </section>
  );
};

export default AddCourses;
