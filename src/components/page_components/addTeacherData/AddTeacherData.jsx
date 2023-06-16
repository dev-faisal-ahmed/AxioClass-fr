import React, { useState } from "react";
import TeacherInfoInput from "./TeacherInfoInput";
import TeacherInfoLabel from "./TeacherInfoLabel";
import { serverAddress } from "../../../data/serverAddress";
import { postReq } from "../../../utils/postReq";
import { toast } from "react-hot-toast";
import { toastConfig } from "../../../utils/toastConfig";
import { useNavigate } from "react-router-dom";

const AddTeacherData = () => {
  const [imageLink, setImageLink] = useState(
    "https://m.media-amazon.com/images/M/MV5BMzdjNjExMTgtZGFmNS00ZWRjLWJmNjAtOTliYzJjYjcxMWFhXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg"
  );
  const route = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const image = imageLink;
    const fName = form.fname.value;
    const lName = form.lname.value;
    const DOfBirth = form.dob.value;
    const DOfPlace = form.pob.value;
    const sex = form.sex.value;
    const email = form.email.value;
    const number = form.number.value;
    const dept = form.dept.value;
    const address = form.address.value;
    const degree = form.degree.value;
    const institution = form.institution.value;
    const subject = form.subject.value;
    const passingYear = form.passingYear.value;

    const formData = {
      name: fName.trim() + " " + lName.trim(),
      dob: DOfBirth,
      birthPlace: DOfPlace,
      email: email.trim(),
      phone: number.trim(),
      sex,
      dept,
      image,
      address,
      education: {
        degree,
        institution,
        subject,
        passingYear,
      },
    };
    // sending data to server
    const url = `${serverAddress}/add-teacher`;
    const response = await fetch(url, postReq(formData)).then((res) => res.json());

    if (response.okay) {
      toast.success("Teacher Added", toastConfig);
      route(`/teacher-document/${response.id}`);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <div className="rounded-lg bg-[#7A68EC]">
          <h3 className="text-white text-xl font-bold p-2">Teacher Information</h3>
          <div className="bg-white rounded-b-lg p-6 flex flex-col gap-6">
            <div className="w-full flex justify-end">
              <div className="flex flex-col gap-2">
                <TeacherInfoLabel label={"photo"} htmlFor={"image"} />
                <label
                  style={{ backgroundImage: `url(${imageLink})` }}
                  className="bg-cover border border-dashed border-[#7A68EC] rounded-md h-[150px] w-[150px] p-2 flex items-center justify-center"
                  htmlFor="image"
                ></label>
                <input
                  onBlur={(e) => {
                    setImageLink(e.target.value);
                  }}
                  className="border border-[#7A68EC] rounded-md p-2 w-[150px] text-gray-500"
                  type="text"
                  placeholder="photo url here"
                  name="image"
                  id="image"
                />
              </div>
            </div>

            <div className="flex w-full gap-[50px]">
              <div className="flex flex-col w-full">
                <TeacherInfoLabel label={"first name"} htmlFor={"fname"} />
                <TeacherInfoInput
                  placeholder={"First Name"}
                  type={"text"}
                  id={"fname"}
                  name={"fname"}
                />
              </div>
              <div className="flex flex-col w-full">
                <TeacherInfoLabel label={"last name"} htmlFor={"lname"} />
                <TeacherInfoInput
                  placeholder={"Last Name"}
                  type={"text"}
                  id={"lname"}
                  name={"lname"}
                />
              </div>
            </div>
            <div className="flex w-full gap-[50px]">
              <div className="flex flex-col w-full">
                <TeacherInfoLabel label={"date of birth"} htmlFor={"dob"} />
                <div className="w-full flex justify-between">
                  <input
                    className="border border-[#7A68EC] rounded-md p-2"
                    type="date"
                    name="dob"
                  />
                  <TeacherInfoInput placeholder={"Dhaka"} type={"text"} id={"pob"} name={"pob"} />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <TeacherInfoLabel label={"sex"} htmlFor={"sex"} />
                {/* <TeacherInfoInput placeholder={'Last Name'} type={'text'} id={'lname'} name={'lname'}/> */}
                <select name="sex" className="border border-[#7A68EC] rounded-md p-2">
                  <option value="men">Male</option>
                  <option value="women">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            <div className="flex w-full gap-[50px]">
              <div className="flex flex-col w-full">
                <TeacherInfoLabel label={"email"} htmlFor={"email"} />
                <TeacherInfoInput placeholder={"Email"} type={"text"} id={"email"} name={"email"} />
              </div>
              <div className="flex flex-col w-full">
                <TeacherInfoLabel label={"Number"} htmlFor={"number"} />
                <TeacherInfoInput
                  placeholder={"Number"}
                  type={"number"}
                  id={"number"}
                  name={"number"}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <TeacherInfoLabel label={"Address"} htmlFor={"address"} />
              <textarea
                required
                className="border border-[#7A68EC] rounded-md p-2"
                name="address"
                id="address"
                cols="30"
                rows="3"
              ></textarea>
            </div>

            <div className="flex w-full gap-[50px]">
              <div className="flex flex-col w-full">
                <TeacherInfoLabel label={"Last Obtained Degree"} htmlFor={"degree-name"} />
                <TeacherInfoInput
                  placeholder={"Last Obtained Degree"}
                  type={"text"}
                  id={"degree-name"}
                  name={"degree"}
                />
              </div>
              <div className="flex flex-col w-full">
                <TeacherInfoLabel label={"University / Institution"} htmlFor={"institution"} />
                <TeacherInfoInput
                  placeholder={"University / Institution"}
                  type={"text"}
                  id={"institution"}
                  name={"institution"}
                />
              </div>
            </div>

            <div className="flex w-full gap-[50px]">
              <div className="flex flex-col w-full">
                <TeacherInfoLabel label={"Subject"} htmlFor={"subject-name"} />
                <TeacherInfoInput
                  placeholder={"Last Obtained Degree"}
                  type={"text"}
                  id={"subject-name"}
                  name={"subject"}
                />
              </div>
              <div className="flex flex-col w-full">
                <TeacherInfoLabel label={"Passing Year"} htmlFor={"passing-year"} />
                <TeacherInfoInput
                  placeholder={"Passing Year"}
                  type={"number"}
                  id={"passing-year"}
                  name={"passingYear"}
                />
              </div>
            </div>

            {/* <div className="flex w-full gap-[50px]">
              <div className="flex flex-col w-full">
                <TeacherInfoLabel label={"educational qualification"} htmlFor={"eduinfo"} />
                <TeacherInfoInput
                  placeholder={"Educational Qualification"}
                  type={"text"}
                  id={"eduinfo"}
                  name={"eduinfo"}
                />
              </div>
              <div className="flex flex-col w-full">
                <TeacherInfoLabel label={"Result"} htmlFor={"result"} />
                <TeacherInfoInput
                  placeholder={"Result"}
                  type={"number"}
                  id={"result"}
                  name={"result"}
                />
              </div>
            </div> */}

            <div className="flex w-full gap-[50px]">
              {/* <div className="flex flex-col w-full">
                <TeacherInfoLabel label={"school name"} htmlFor={"school"} />
                <TeacherInfoInput
                  placeholder={"School Name"}
                  type={"text"}
                  id={"school"}
                  name={"school"}
                />
              </div> */}
              <div className="flex flex-col w-full">
                <TeacherInfoLabel label={"Department"} htmlFor={"dept"} />
                {/* <TeacherInfoInput placeholder={'Last Name'} type={'text'} id={'lname'} name={'lname'}/> */}
                <select name="dept" className="border border-[#7A68EC] rounded-md p-2">
                  <option value="CSE">CSE</option>
                  <option value="EEE">EEE</option>
                </select>
              </div>
              {/* to prevent department taking full width */}
              <div className="w-full"></div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end items-center text-white">
          <div className="flex gap-6">
            <button
              type="reset"
              className="bg-[#ec6868] hover:bg-[#ca2222] animation p-2 rounded-lg w-[100px] font-bold"
            >
              Clear
            </button>
            <button className="bg-[#7A68EC] hover:bg-[#22ca54] animation p-2 rounded-lg w-[100px] font-bold">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTeacherData;
