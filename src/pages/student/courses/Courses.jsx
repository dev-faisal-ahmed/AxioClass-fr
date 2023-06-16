import React, { useState } from "react";
import GlobalLayout from "../../../layout/GlobalLayout";
import AddCourses from "../../../components/page_components/student/course_page/add_course/AddCourse";
import CurrentCourses from "../../../components/page_components/student/course_page/current_course/CurrentCourses";

const Courses = () => {
  const [addCourse, setAddCourse] = useState(false);

  const buttonClass = `w-fit ml-auto block px-8 py-2 border-2 border-transparent hover:bg-transparent text-white hover:font-semibold rounded-lg animation ${
    addCourse
      ? "hover:border-red-600 bg-red-600 hover:text-red-600"
      : "hover:border-primary-500 bg-primary-500 hover:text-primary-800"
  }`;

  return (
    <GlobalLayout
      pageName={"Courses"}
      body={
        <>
          {!addCourse && (
            <button onClick={() => setAddCourse(true)} className={`${buttonClass}`}>
              + &nbsp; Add Course
            </button>
          )}
          {addCourse && (
            <button onClick={() => setAddCourse(false)} className={`${buttonClass}`}>
              - &nbsp; Hide Course
            </button>
          )}

          {/* add Courses */}
          {addCourse && <AddCourses setAddCourse={setAddCourse} />}
          <CurrentCourses />
        </>
      }
    ></GlobalLayout>
  );
};

export default Courses;
