import React, { useState } from "react";
import SettingsLabel from "./SettingsLabel";
import SettingsInput from "./SettingsInput";
import { FaRegEye } from "react-icons/fa";

const SettingsSec = () => {
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [imageLink, setImageLink] = useState(
    "https://w0.peakpx.com/wallpaper/604/509/HD-wallpaper-nezuko-anime-demon-demon-slayer-girl-kimetsu-no-yaiba-nezuko-demon-tanjiro.jpg"
  );
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const pass = form.pass.value;
    const surePass = form.surePass.value;
    const email = form.email.value;
    const number = form.number.value;
    const address = form.address.value;
    const imageLink = form.image.value;

    const formData ={
      imageLink,
      email,
      number,
      address,
      pass,
    }
    if (pass == surePass) {
      setError(false);
      console.log(formData);
    } else {
      setError(true);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <div className="rounded-lg bg-[#7A68EC]">
          <h3 className="text-white text-xl font-bold p-2">
            Update Information
          </h3>
          <div className="bg-white rounded-b-lg p-6 flex flex-col gap-6">
            <div className="w-full flex justify-end">
              <div className="flex flex-col gap-2">
                <SettingsLabel label={"photo"} htmlFor={"image"} />
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
                  defaultValue={
                    "https://w0.peakpx.com/wallpaper/604/509/HD-wallpaper-nezuko-anime-demon-demon-slayer-girl-kimetsu-no-yaiba-nezuko-demon-tanjiro.jpg"
                  }
                />
              </div>
            </div>

            <div className="flex w-full gap-[50px]">
              <div className="flex flex-col w-full">
                <SettingsLabel label={"email"} htmlFor={"email"} />
                <SettingsInput
                  placeholder={"Email"}
                  type={"text"}
                  id={"email"}
                  name={"email"}
                  defaultValue={"nezuko@anime.com"}
                />
              </div>
              <div className="flex flex-col w-full">
                <SettingsLabel label={"Number"} htmlFor={"number"} />
                <SettingsInput
                  placeholder={"Number"}
                  type={"number"}
                  id={"number"}
                  name={"number"}
                  defaultValue={"01478523691"}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <SettingsLabel label={"Address"} htmlFor={"address"} />
              <textarea
                required
                className="border border-[#7A68EC] rounded-md p-2"
                name="address"
                id="address"
                cols="30"
                rows="3"
                defaultValue={"Japan"}
              ></textarea>
            </div>

            <div
              className={`flex w-full gap-[50px] rounded-lg animation ${
                error ? "border-red-500 p-3 border-2 text-red-500" : null
              }`}
            >
              <div className="flex flex-col w-full">
                <SettingsLabel label={"password"} htmlFor={"pass"} />
                <SettingsInput
                  placeholder={"Password"}
                  type={show ? "text" : "password"}
                  id={"pass"}
                  name={"pass"}
                  defaultValue={"nezuko@anime.com"}
                  icon={<FaRegEye size={25} />}
                  show={show}
                  setShow={setShow}
                />
              </div>
              <div className="flex flex-col w-full">
                <SettingsLabel
                  label={"Confirm Password"}
                  htmlFor={"surePass"}
                />
                <SettingsInput
                  placeholder={"Confirm password"}
                  type={"password"}
                  id={"surePass"}
                  name={"surePass"}
                  defaultValue={"01478523691"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end items-center text-white">
          <div className="flex gap-6">
            <button className="bg-[#7A68EC] hover:bg-[#22ca54] animation p-2 rounded-lg w-[100px] font-bold">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingsSec;
