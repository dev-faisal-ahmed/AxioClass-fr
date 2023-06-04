import React from "react";

const AddStudentData = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const fName = form.fName.value;
    const lName = form.lName.value;
    const pName = form.pName.value;
    const DOfBirth = form.DOfBirth.value;
    const DOfPlace = form.DOfPlace.value;
    const email = form.email.value;
    const number = form.number.value;
    const address = form.address.value;
    const hsc = form.hsc.value
    const ssc = form.ssc.value
    const doc = form.doc.value
    const formData = {
      image: image,
      fName: fName,
      lName: lName,
      pName: pName,
      DOfBirth: DOfBirth,
      DOfPlace: DOfPlace,
      email: email,
      number: number,
      address: address,
      hsc:hsc,
      ssc:ssc,
      doc:doc
    };
    console.log(formData);
    form.reset();
  };

  return (
    <div className="pt-12">
      <form className="flex flex-col gap-6" onSubmit={onSubmit}>
        <div className="rounded-md bg-[#7A68EC]">
          <h3 className="text-white text-xl font-bold p-2">
            Student Information
          </h3>
          <div className="bg-white rounded-b-md p-6 flex flex-col gap-6">
            <div className="flex flex-col items-end">
              <div>
                <label htmlFor="image">Photo</label>
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
                <label htmlFor="fName">First Name</label>
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
                <label htmlFor="lName">Last Name</label>
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
                <label htmlFor="DOfBirth">Date of birth & place</label>
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
                <label htmlFor="pName">Parents Name</label>
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
                <label htmlFor="email">Email</label>
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
                <label htmlFor="number">number</label>
                <input
                  required
                  className="border border-[#7A68EC] rounded-md p-2"
                  placeholder="+8801234567890"
                  type="number"
                  name="number"
                  id="number"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="address">Address</label>
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
        <div className="rounded-md bg-[#7A68EC]">
          <h3 className="text-white text-xl font-bold p-2">
            Student Academic info
          </h3>
          <div className="bg-white rounded-b-md p-6 flex flex-col gap-6">
          <div className="grid grid-cols-2 justify-around gap-6">
          <div className="flex flex-col">
                <label htmlFor="hsc">H.S.C</label>
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
                <label htmlFor="ssc">S.S.C</label>
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
                <label htmlFor="doc">Certificate & documents</label>
                <input
                  className="border border-[#7A68EC] rounded-md p-2"
                  type="file"
                  name="doc"
                  id="doc"
                />
              </div>
          </div>
          <div className="flex w-full justify-center items-center text-white">
              <div className="flex w-[200px]">
                <button className="bg-[#7A68EC] hover:bg-[#22ca54] transition-all p-2 rounded-l-md w-1/2 hover:w-full">
                  Submit
                </button>
                <button
                  type="reset"
                  className="bg-[#ec6868] hover:bg-[#ca2222] transition-all p-2 rounded-r-md cursor-pointer w-1/2 hover:w-full text-center"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
          </div>
      </form>
    </div>
  );
};

export default AddStudentData;
