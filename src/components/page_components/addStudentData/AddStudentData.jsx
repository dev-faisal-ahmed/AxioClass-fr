import React from "react";

const AddStudentData = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
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
    const hsc = form.hsc.value
    const ssc = form.ssc.value
    const dept = form.dept.value
    const semester = form.semester.value
    const intake = form.intake.value
    const id = form.id.value


    const formData = {
      image: image,
      fName: fName,
      lName: lName,
      DOfBirth: DOfBirth,
      DOfPlace: DOfPlace,
      sex:sex,
      email: email,
      number: number,
      pName: pName,
      pNum: pNum,
      address: address,
      hsc:hsc,
      ssc:ssc,
      dept:dept,
      semester:semester,
      intake:intake,
      id:id
    };
    console.log(formData);
    form.reset();
  };

  return (
    <div className="pt-12">
      <form className="flex flex-col gap-6" onSubmit={onSubmit}>
        <div className="rounded-lg bg-[#7A68EC]">
          <h3 className="text-white text-xl font-bold p-2">
            Student Information
          </h3>
          <div className="bg-white rounded-b-lg p-6 flex flex-col gap-6">
            <div className="flex flex-col items-end">
              <div>
                <label className="font-semibold" htmlFor="image">Photo</label>
                <label
                  className="border border-dashed border-[#7A68EC] rounded-md h-[150px] w-[150px] p-2 flex items-center justify-center"
                  htmlFor="image"
                >
                  <span className="text-sm text-center text-gray-500">
                    Drag and drop
                    <br />
                    your photo here
                  </span>
                </label>
                <input className="hidden" type="file" name="image" id="image" />
              </div>
            </div>
            <div className="grid grid-cols-2 justify-around gap-6">
              <div className="flex flex-col">
                <label className="font-semibold pb-2" htmlFor="fName">First Name</label>
                <input
                  required
                  className="border border-[#7A68EC] rounded-md p-2"
                  placeholder="John"
                  type="text"
                  name="fName"
                  id="fName"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2" htmlFor="lName">Last Name</label>
                <input
                  required
                  className="border border-[#7A68EC] rounded-md p-2"
                  placeholder="Wick"
                  type="text"
                  name="lName"
                  id="lName"
                />
              </div>
              <div className="flex  flex-col">
                <label className="font-semibold pb-2" htmlFor="DOfBirth">Date of birth & place</label>
                <div className="flex gap-6 justify-between">
                  <input
                    required
                    className="border border-[#7A68EC] rounded-md p-2"
                    type="date"
                    name="DOfBirth"
                    id="DOfBirth"
                  />
                  <input
                    required
                    className="border border-[#7A68EC] rounded-md p-2"
                    placeholder="Dhaka"
                    type="text"
                    name="DOfPlace"
                    id="DOfPlace"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2" htmlFor="sex">Sex</label>
                <select className="border border-[#7A68EC] rounded-md p-2" name="sex" id="sex">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2" htmlFor="email">Email</label>
                <input
                  required
                  className="border border-[#7A68EC] rounded-md p-2"
                  placeholder="johnwick@example.com"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2" htmlFor="number">number</label>
                <input
                  required
                  className="border border-[#7A68EC] rounded-md p-2"
                  placeholder="+8801234567890"
                  type="number"
                  name="number"
                  id="number"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2" htmlFor="pName">Parents Name</label>
                <input
                  required
                  className="border border-[#7A68EC] rounded-md p-2"
                  placeholder="Wick"
                  type="text"
                  name="pName"
                  id="pName"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2" htmlFor="pNum">Parents Number</label>
                <input
                  required
                  className="border border-[#7A68EC] rounded-md p-2"
                  placeholder="+8801234567890"
                  type="number"
                  name="pNum"
                  id="pNum"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold pb-2" htmlFor="address">Address</label>
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
                <label className="font-semibold pb-2" htmlFor="hsc">H.S.C</label>
                <input
                  required
                  className="border border-[#7A68EC] rounded-md p-2"
                  placeholder="5.00"
                  type="number"
                  name="hsc"
                  id="hsc"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2" htmlFor="ssc">S.S.C</label>
                <input
                  required
                  className="border border-[#7A68EC] rounded-md p-2"
                  placeholder="5.00"
                  type="number"
                  name="ssc"
                  id="ssc"
                />
              </div>
              <div className="flex flex-col">
              <label className="font-semibold pb-2" htmlFor="dept">department</label>
              <select className="border border-[#7A68EC] rounded-md p-2" name="dept" id="dept">
                <option value="cse">C.S.E</option>
              </select>
              </div>
              <div className="flex flex-col">
              <label className="font-semibold pb-2" htmlFor="semester">Semester</label>
              <select className="border border-[#7A68EC] rounded-md p-2" name="semester" id="semester">
                <option value="01">Fall</option>
                <option value="02">Summer</option>
              </select>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2" htmlFor="intake">Intake</label>
                <input
                required
                placeholder="46"
                  className="border border-[#7A68EC] rounded-md p-2"
                  type="number"
                  name="intake"
                  id="intake"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2" htmlFor="id">ID</label>
                <input
                required
                placeholder="cse20110137"
                  className="border border-[#7A68EC] rounded-md p-2"
                  type="text"
                  name="id"
                  id="id"
                />
              </div>
          </div>
          
          </div>
          </div>
          <div className="flex w-full justify-end items-center text-white">
              <div className="flex gap-12">
                <button className="bg-[#7A68EC] hover:bg-[#22ca54] transition-all p-2 rounded-3xl w-[100px] font-bold">
                  Submit
                </button>
                <button
                  type="reset"
                  className="bg-[#ec6868] hover:bg-[#ca2222] transition-all p-2 rounded-3xl w-[100px] font-bold"
                >
                  Clear
                </button>
              </div>
            </div>
      </form>
    </div>
  );
};

export default AddStudentData;
