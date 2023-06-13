import React, { useState } from "react";
import TeacherInfoInput from "./TeacherInfoInput";
import TeacherInfoLabel from "./TeacherInfoLabel";

const AddTeacherData = () => {
  const [imageLink, setImageLink] = useState(
    "https://m.media-amazon.com/images/M/MV5BMzdjNjExMTgtZGFmNS00ZWRjLWJmNjAtOTliYzJjYjcxMWFhXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg"
  );
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
    const result = form.result.value;
    const dept = form.dept.value;
    const school = form.school.value;
    const eduinfo = form.eduinfo.value;
    // const id = form.id.value

    const formData = {
      fName: fName.trim(),
      lName: lName.trim(),
      dob: DOfBirth,
      birthPlace: DOfPlace,
      sex,
      email: email.trim(),
      number: number.trim(),
      result: result.trim(),
      school: school.trim(),
      eduinfo: eduinfo.trim(),
      dept,
      image,
    };

    console.log(formData)

  }
  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <div className="rounded-lg bg-[#7A68EC]">
          <h3 className="text-white text-xl font-bold p-2">
            Teacher Information
          </h3>
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
                  <TeacherInfoInput
                    placeholder={""}
                    type={"date"}
                    id={"dob"}
                    name={"dob"}
                  />
                  <TeacherInfoInput
                    placeholder={"Dhaka"}
                    type={"text"}
                    id={"dob"}
                    name={"pob"}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <TeacherInfoLabel label={"sex"} htmlFor={"sex"} />
                {/* <TeacherInfoInput placeholder={'Last Name'} type={'text'} id={'lname'} name={'lname'}/> */}
                <select name="sex" className="border border-[#7A68EC] rounded-md p-2">
                  <option value="men">Men</option>
                  <option value="women">Woman</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            <div className="flex w-full gap-[50px]">
              <div className="flex flex-col w-full">
                <TeacherInfoLabel label={"email"} htmlFor={"email"} />
                <TeacherInfoInput
                  placeholder={"Email"}
                  type={"text"}
                  id={"email"}
                  name={"email"}
                />
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

            <div className="flex w-full gap-[50px]">
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
            </div>

            <div className="flex w-full gap-[50px]">
              <div className="flex flex-col w-full">
                <TeacherInfoLabel label={"school name"} htmlFor={"school"} />
                <TeacherInfoInput
                  placeholder={"School Name"}
                  type={"text"}
                  id={"school"}
                  name={"school"}
                />
              </div>
              <div className="flex flex-col w-full">
                <TeacherInfoLabel label={"Department"} htmlFor={"dept"} />
                <TeacherInfoInput
                  placeholder={"Department"}
                  type={"text"}
                  id={"dept"}
                  name={"dept"}
                />
              </div>
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
