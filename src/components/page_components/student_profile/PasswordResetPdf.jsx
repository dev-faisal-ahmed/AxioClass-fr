import React, { useRef } from "react";
import ProfileIcon from "../../shared/profile_icon/ProfileIcon";
import { useReactToPrint } from "react-to-print";

const PasswordResetPdf = ({ image, name, id, password }) => {
  const docRef = useRef(null);
  // ui helper function
  const textBox = (key, value) => {
    return (
      <p className="center--y gap-5 justify-between w-full">
        <span className="text-gray-500">{key}</span>
        <span className="font-semibold">{value}</span>
      </p>
    );
  };

  const downloadPdf = useReactToPrint({ content: () => docRef.current });

  return (
    <>
      <div className="mt-5 max-w-[350px] mx-auto" ref={docRef}>
        <h2 className="text-center font-semibold text-lg">Student's Information</h2>
        <ProfileIcon img={image} style={{ margin: "30px auto 20px" }} size={"100px"} />
        <hr />
        <div className="flex flex-col gap-2 w-full mt-3">
          {textBox("Name", name)}
          {textBox("Id", id)}
          {textBox("Password", password)}
        </div>
      </div>
      <button onClick={downloadPdf} className="button-primary py-1 px-3 block mx-auto mt-5">
        Download
      </button>
    </>
  );
};

export default PasswordResetPdf;
