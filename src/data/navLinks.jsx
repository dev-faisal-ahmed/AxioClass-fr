import { MdClass, MdDashboard } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import { RiNumbersFill, RiSettings3Fill } from "react-icons/ri";
import { BsFillCreditCard2FrontFill, BsCreditCardFill } from "react-icons/bs";
import { FaUserGraduate, FaUserSecret } from "react-icons/fa";
import {AiFillNotification} from "react-icons/ai"

export const navLinks = [
  {
    title: "Dashboard",
    url: "/",
    icon: <MdDashboard size={20} />,
  },
  {
    title: "Fees And Waiver",
    url: "/fees-and-waiver",
    icon: <BsFillCreditCard2FrontFill size={20} />,
  },
  {
    title: "Classes",
    url: "/classes",
    icon: <MdClass size={20} />,
  },
  {
    title: "Schedule",
    url: "/schedule",
    icon: <IoCalendar size={20} />,
  },
  {
    title: "Grades",
    url: "/grades",
    icon: <RiNumbersFill size={20} />,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: <RiSettings3Fill size={20} />,
  },
];

export const adminNavLinks = [
  {
    title: "Dashboard",
    url: "/",
    icon: <MdDashboard size={20} />,
  },
  {
    title: "Fees",
    url: "/fees",
    icon: <BsCreditCardFill size={20} />,
  },
  {
    title: "Students",
    url: "/addStudent",
    icon: <FaUserGraduate size={20} />,
  },
  {
    title: "Teacher",
    url: "/teacher",
    icon: <FaUserSecret size={20} />,
  },
  {
    title: "Notice",
    url: "/addnotice",
    icon: <AiFillNotification size={20} />,
  },
];
