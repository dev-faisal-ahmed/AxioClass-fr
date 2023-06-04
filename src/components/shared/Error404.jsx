import React from "react";
import { BsFileEarmarkLock2Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const path = useNavigate();
  // const history =
  return (
    <main className="h-screen center--xy">
      <div>
        <BsFileEarmarkLock2Fill size={100} className="text-primary-500 mx-auto mb-8" />
        <h1 className="text-xl font-semibold text-center">
          This content isn't available right now
        </h1>
        <button
          onClick={() => path("/")}
          className="block mx-auto mt-3 bg-primary-500 text-white py-2 px-5 rounded-lg"
        >
          Go to Home
        </button>
        <button
          onClick={() => path(-1)}
          className="block mx-auto mt-4 text-primary-700 font-semibold"
        >
          Go back
        </button>
      </div>
    </main>
  );
};

export default Error404;
