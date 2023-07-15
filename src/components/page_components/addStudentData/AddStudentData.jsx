import React, { useState } from 'react';
import { serverAddress } from '../../../data/serverAddress';
import { toast } from 'react-hot-toast';
import { toastConfig } from '../../../utils/toastConfig';
import { useNavigate } from 'react-router-dom';
import StudentInfoLabel from './StudentInfoLabel';
import StudentInfoInput from './StudentInfoInput';
import { postReq } from '../../../utils/postReq';
import { useActivities } from '../../../hooks/activities/useActivities';

const AddStudentData = () => {
  const { refetch: activitiesRefetch } = useActivities();
  const route = useNavigate();
  // handel image
  const [imageLink, setImageLink] = useState(
    'https://m.media-amazon.com/images/M/MV5BMzdjNjExMTgtZGFmNS00ZWRjLWJmNjAtOTliYzJjYjcxMWFhXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg'
  );
  // handle student admission
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const image = imageLink;
    const fName = form.fName.value;
    const lName = form.lName.value;
    const DOfBirth = form.DOfBirth.value;
    const DOfPlace = form.DOfPlace.value;
    const sex = form.sex.value;
    const email = form.email.value;
    const number = form.number.value;
    const pName = form.pName.value;
    const pNum = form.pNum.value;
    const address = form.address.value;
    const hscResult = form.hscResult.value;
    const hscYear = form.hscYear.value;
    const hscBoard = form.hscBoard.value;
    const sscResult = form.sscResult.value;
    const sscYear = form.sscYear.value;
    const sscBoard = form.sscBoard.value;
    const dept = form.dept.value;
    const intake = form.intake.value;

    const formData = {
      name: fName.trim() + ' ' + lName.trim(),
      dob: DOfBirth,
      birthPlace: DOfPlace,
      sex,
      email: email.trim(),
      phone: number.trim(),
      address: address.trim(),
      dept,
      intake,
      image,
      guardianInfo: {
        name: pName.trim(),
        number: pNum.trim(),
      },
      education: {
        ssc: { result: sscResult, year: sscYear, board: sscBoard },
        hsc: { result: hscResult, year: hscYear, board: hscBoard },
      },
    };

    // fetching data
    const url = `${serverAddress}/add-student`;
    fetch(url, postReq(formData))
      .then((res) => res.json())
      .then((res) => {
        if (res?.okay) {
          console.log(res);
          toast.error(res.msg, toastConfig);
        } else {
          toast.success('Student Admitted', toastConfig);
          useActivities();
        }
      });
  };

  return (
    <div>
      <form className="flex flex-col gap-6" onSubmit={onSubmit}>
        <div className="rounded-lg bg-[#7A68EC]">
          <h3 className="text-white text-xl font-bold p-2">
            Student Information
          </h3>
          <div className="bg-white rounded-b-lg p-6 flex flex-col gap-6">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-2">
                <StudentInfoLabel label={'photo'} htmlFor={'image'} />
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
            <div className="grid grid-cols-2 justify-around gap-6">
              <div className="flex flex-col">
                <StudentInfoLabel label={'First Name'} htmlFor={'fName'} />
                <StudentInfoInput
                  placeholder={'John'}
                  type={'text'}
                  id={'fName'}
                  name={'fName'}
                />
              </div>
              <div className="flex flex-col">
                <StudentInfoLabel label={'Last Name'} htmlFor={'lName'} />
                <StudentInfoInput
                  placeholder={'Wick'}
                  type={'text'}
                  id={'lName'}
                  name={'lName'}
                />
              </div>
              <div className="flex  flex-col">
                <StudentInfoLabel
                  label={'Date of birth & place'}
                  htmlFor={'DOfBirth'}
                />
                <div className="flex gap-6 justify-between">
                  <StudentInfoInput
                    placeholder={''}
                    type={'date'}
                    id={'DOfBirth'}
                    name={'DOfBirth'}
                  />
                  <StudentInfoInput
                    placeholder={'Dhaka'}
                    type={'text'}
                    id={'DOfPlace'}
                    name={'DOfPlace'}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <StudentInfoLabel label={'Sex'} htmlFor={'Sex'} />
                <select
                  className="border border-[#7A68EC] rounded-md p-2"
                  name="sex"
                  id="sex"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Other</option>
                </select>
              </div>
              <div className="flex flex-col">
                <StudentInfoLabel label={'Email'} htmlFor={'email'} />
                <StudentInfoInput
                  placeholder={'johnwick@example.com'}
                  type={'email'}
                  id={'email'}
                  name={'email'}
                />
              </div>
              <div className="flex flex-col">
                <StudentInfoLabel label={'number'} htmlFor={'number'} />
                <StudentInfoInput
                  placeholder={'+8801234567890'}
                  type={'number'}
                  id={'number'}
                  name={'number'}
                />
              </div>
              <div className="flex flex-col">
                <StudentInfoLabel label={'Parents Name'} htmlFor={'pName'} />
                <StudentInfoInput
                  placeholder={'Wick'}
                  type={'text'}
                  id={'pName'}
                  name={'pName'}
                />
              </div>
              <div className="flex flex-col">
                <StudentInfoLabel label={'Parents Number'} htmlFor={'pNum'} />
                <StudentInfoInput
                  placeholder={'+8801234567890'}
                  type={'number'}
                  id={'pNum'}
                  name={'pNum'}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <StudentInfoLabel label={'Address'} htmlFor={'address'} />
              <textarea
                required
                className="border border-[#7A68EC] rounded-md p-2"
                name="address"
                id="address"
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-[#7A68EC]">
          <h3 className="text-white text-xl font-bold p-2">
            Student Academic info
          </h3>
          <div className="bg-white rounded-b-lg p-6 flex flex-col gap-6">
            <div className="grid grid-cols-2 justify-around gap-6">
              <div className="flex flex-col">
                <StudentInfoLabel label={'H.S.C'} htmlFor={'hsc-result'} />
                <StudentInfoInput
                  placeholder={'5.00'}
                  type={'number'}
                  step={0.01}
                  id={'hsc-result'}
                  name={'hscResult'}
                />
              </div>
              <div className="flex flex-col">
                <StudentInfoLabel label={'S.S.C'} htmlFor={'ssc-result'} />
                <StudentInfoInput
                  placeholder={'5.00'}
                  type={'number'}
                  step={0.01}
                  id={'ssc-result'}
                  name={'sscResult'}
                />
              </div>
              <div className="flex flex-col">
                <StudentInfoLabel label={'H.S.C year'} htmlFor={'hscYear'} />
                <StudentInfoInput
                  placeholder={'2123'}
                  type={'number'}
                  id={'hscYear'}
                  name={'hscYear'}
                />
              </div>
              <div className="flex flex-col">
                <StudentInfoLabel label={'S.S.C year'} htmlFor={'sscYear'} />
                <StudentInfoInput
                  placeholder={'2120'}
                  type={'number'}
                  id={'sscYear'}
                  name={'sscYear'}
                />
              </div>
              <div className="flex flex-col">
                <StudentInfoLabel label={'H.S.C board'} htmlFor={'hscBoard'} />
                <StudentInfoInput
                  placeholder={'Barishal'}
                  type={'text'}
                  id={'hscBoard'}
                  name={'hscBoard'}
                />
              </div>
              <div className="flex flex-col">
                <StudentInfoLabel label={'S.S.C board'} htmlFor={'sscBoard'} />
                <StudentInfoInput
                  placeholder={'Barishal'}
                  type={'text'}
                  id={'sscBoard'}
                  name={'sscBoard'}
                />
              </div>
              <div className="flex flex-col">
                <StudentInfoLabel label={'department'} htmlFor={'dept'} />
                <select
                  className="border border-[#7A68EC] rounded-md p-2"
                  name="dept"
                  id="dept"
                >
                  <option value="CSE">C.S.E</option>
                </select>
              </div>
              <div className="flex flex-col">
                <StudentInfoLabel label={'Intake'} htmlFor={'Intake'} />
                <StudentInfoInput
                  placeholder={'46'}
                  type={'number'}
                  id={'intake'}
                  name={'intake'}
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

export default AddStudentData;
