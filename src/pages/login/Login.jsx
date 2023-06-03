import React from "react";

const Login = () => {
  const loginInfo =(event)=>{
    event.preventDefault();
    const form = event.target;
    const id = form.id.value;
    const pass = form.pass.value;
    const user = form.user.value;

    console.log(user,id,pass)
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-4 justify-center items-center w-[400px] border rounded-md p-4 text-center shadow-lg hover:shadow-xl transition-all">
        <h3 className="text-xl font-semibold">Login</h3>
        <form onSubmit={loginInfo} className="flex flex-col items-center gap-4 w-full">
        <select className="border rounded p-2 w-full" name="user" id="user">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
          <input className="border rounded p-2 w-full outline-none" placeholder="ID" type="text" name="id" id="id" />
          <input className="border rounded p-2 w-full outline-none" placeholder="Password" type="password" name="pass" id="pass" />
          
          <button className="rounded bg-[#7A68EC] text-[#fff] p-2 w-fit hover:bg-transparent hover:text-[#000] border border-transparent hover:border-black transition-all">Login</button>
        </form>
        <p className="text-gray-500 font-light text-sm">Don't have an account? Contact admin.</p>
      </div>
    </div>
  );
};

export default Login;
