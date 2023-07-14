import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getLocalUser } from "../../../../../utils/localStorage";
import { serverAddress } from "../../../../../data/serverAddress";
import { toastConfig } from "../../../../../utils/toastConfig";
import AddCourseTable from "./AddCourseTable";
import { removeUser } from "../../../../../utils/logout";
import { useNavigate } from "react-router-dom";

const AddCourses = ({ setAddCourse }) => {
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState({});
  const { id } = getLocalUser();
  const route = useNavigate();

  useEffect(() => {
    const url = `${serverAddress}/courses/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.okay) setAllCourses(res.data);
        else {
          toast.error(res.msg, toastConfig);
          if (res.userCorrupted) {
            removeUser();
            route("/login");
          }
        }
      });
  }, [id]);

  if (allCourses.length === 0) return <h1 className="font-semibold">No Course Found</h1>;
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
