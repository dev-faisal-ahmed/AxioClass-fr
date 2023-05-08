import { blue } from "../../utilities/colorPalate";
import "./login.css";
import loginBg from "/public/static/login_bg.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
export const Login = () => {
  // ********** functions ********** //
  const loginInput = ({ type, placeholder, icon, id }) => {
    return (
      <div className="loginInput input">
        <label className="loginInput__label" htmlFor={id}>
          {icon}
        </label>
        <input
          className="loginInput__input center-xy"
          id={id}
          type={type}
          placeholder={placeholder}
        />
      </div>
    );
  };
  return (
    <main className="login">
      <section className="login__textBox">
        <h1 className="login__logo">Axio Class</h1>
        <form className="login__form">
          <h2>Welcome Back</h2>
          <p>Welcome Again, Please Enter Your Valid Information</p>
          <select className="login__select input" name="role" id="role">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
          {loginInput({
            type: "email",
            placeholder: "john.doe@gamil.com",
            icon: <HiOutlineMail size={25} />,
          })}
          {loginInput({
            type: "email",
            placeholder: "Enter Your Password",
            icon: <RiLockPasswordLine size={25} />,
          })}
          <button style={{ backgroundColor: blue }} className="login__button">
            Login
          </button>
        </form>
        <p>If You don't have an account, please contact to the admin</p>
      </section>
      <section className="login__banner center-xy">
        &nbsp;
        {/* <img className="w-full h-full" src={loginBg} alt="login_bg" /> */}
      </section>
    </main>
  );
};
