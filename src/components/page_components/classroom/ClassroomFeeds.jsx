import React, { useEffect, useState } from "react";
import ClassroomPostForm from "./ClassroomPostForm";
import ClassroomFeedCard from "./ClassroomFeedCard";
import { FaChalkboardTeacher } from "react-icons/fa";
import ShowAllStudents from "./ShowAllStudents";
import { getLocalUser } from "../../../utils/localStorage";
import ResultInput from "./ResultInput";

const ClassroomFeeds = ({ classCodeID }) => {
  const { role } = getLocalUser();
  const [showStudent, setShowStudent] = useState(false);
  const [showInputResult, setInputResult] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [classroomData, setClassroomData] = useState(null);
  const [newPost, setNewPost] = useState();
  const url = `http://localhost:5000/classroom/${classCodeID}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setClassroomData(data.data);
        console.log(classroomData);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    console.log(classCodeID);
  }, [newPost]);
  return (
    <div className="flex flex-col gap-6 text-gray-700">
      <div
        style={{
          backgroundImage: `url(${classroomData?.classInfo.img})`,
        }}
        className="bg-white rounded-xl shadow-md bg-cover bg-center pt-20"
      >
        <div className="flex justify-between items-end w-full p-6">
          <div className="flex items-end gap-6">
            <div className="w-24 h-24 bg-white flex items-center justify-center bg-cover bg-center border-2 border-primary-500 rounded-2xl mb-[-50px]">
              <FaChalkboardTeacher size={70} />
            </div>
          </div>
        </div>
        <div className="flex p-4 pt-6 pr-6 border-b-2 bg-white justify-between items-center">
          <div className="flex font-semibold gap-4 ">
            <div>class Name: {classroomData?.classInfo.className}</div>
            <div>Corse Code: {classroomData?.classInfo.courseCode}</div>
            <div>Intake: {classroomData?.classInfo.intake}</div>
          </div>
          <div className="pb-3 flex">
            {classroomData?.classInfo.studentList.slice(0, 3).map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                className="mr-[-10px] w-10 h-10 bg-white rounded-full bg-cover bg-center"
              ></div>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-start gap-6 text-gray-500 bg-white rounded-b-xl p-2 px-4">
          <button onClick={() => setShowStudent(true)}>Student</button>
          <ShowAllStudents
            student={classroomData?.classInfo.studentList}
            showStudent={showStudent}
            setShowStudent={setShowStudent}
          />
          {role === "teacher" && <button onClick={() => setInputResult(true)}>Result</button>}
          <ResultInput
            student={classroomData?.classInfo.studentList}
            courseCode={classroomData?.classInfo.courseCode}
            showInputResult={showInputResult}
            setInputResult={setInputResult}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="w-full flex flex-col gap-4"></div>
        <div className="w-full flex flex-col gap-6">
          {role === "teacher" && (
            <ClassroomPostForm
              setNewPost={setNewPost}
              classCodeID={classCodeID}
              showForm={showForm}
              setShowForm={setShowForm}
            />
          )}
          <div className="w-full flex flex-col-reverse gap-4">
            {classroomData?.posts.map((item, index) => (
              <ClassroomFeedCard
                key={index}
                item={item}
                teacher={classroomData?.classInfo?.instructor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomFeeds;
