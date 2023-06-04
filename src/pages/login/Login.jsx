import React from "react";
import { serverAddress } from "../../data/serverAddress";
import { toast } from "react-hot-toast";
import { toastConfig } from "../../utils/toastConfig";
import { setUser } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const route = useNavigate();
  // functions
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const id = form.id.value;
    const password = form.pass.value;
    const user = form.user.value;
    const url = `${serverAddress}/login/${user}`;

    // fetching data
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, password }),
    })
      .then((res) => res.json())
      .catch((err) => {
        toast.error(err, toastConfig);
        return;
      });

    if (!res?.id) {
      toast.error(res?.msg, toastConfig);
      return;
    }
    setUser(res.id);
    route("/");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen w-screen bg-[#EFF0FE]">
      <div className="h-1/4 md:h-4/5 md:w-2/3 flex flex-col items-center justify-center text-center bg-[url(https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover">
        <div className="bg-transparent backdrop-blur-md w-full p-6">
        <h3 className="text-4xl text-white">Axio-Class</h3>
        <p className="text-gray-200 font-light">To make life a little bit easy and for a better future.</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center md:items-start h-full md:w-1/3 md:border p-6 md:p-12 shadow-lg hover:shadow-xl transition-all bg-white">
        <h3 className="text-xl font-semibold">Please login first</h3>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center md:items-start gap-4 w-full"
        >
          <div className="flex flex-col items-center md:items-start gap-0">
            <label htmlFor="user">Select user type</label>
            <select
              className="border rounded p-2 w-1/3 min-w-[250px] bg-[#EFF0FE]"
              name="user"
              id="user"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="flex flex-col items-center md:items-start gap-0">
            <label htmlFor="id">ID</label>
            <input
              required
              className="border rounded p-2  w-1/3 min-w-[250px] outline-none bg-[#EFF0FE]"
              placeholder="cse2011010001"
              type="text"
              name="id"
              id="id"
            />
          </div>
          <div className="flex flex-col items-center md:items-start gap-0">
            <label htmlFor="pass">Password</label>
            <input
              required
              className="border rounded p-2  w-1/3 min-w-[250px] outline-none bg-[#EFF0FE]"
              placeholder="*#%&*!$%$#"
              type="password"
              name="pass"
              id="pass"
            />
          </div>
          <p className="text-gray-500 font-light text-sm">Forgot password? contact admin.</p>
          <button className="rounded bg-[#7A68EC] text-[#fff] p-2 w-1/3 min-w-[250px] hover:bg-transparent hover:text-[#000] border border-transparent hover:border-black transition-all">
            Login
          </button>
        </form>
        <p className="text-gray-500 font-light text-sm">Don't have an account? Contact admin.</p>
      </div>
    </div>
  );
};

export default Login;
