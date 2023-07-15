import React from "react";
import TopBarMiddle from "../components/shared/top_bar/TopBarMiddle";
import Sidebar from "../components/shared/sidebar/Sidebar";
import TopBarSide from "../components/shared/top_bar/TopBarSide";
import Error404 from "../components/shared/Error404";
import { getLocalUser } from "../utils/localStorage";
import RightSideBar from "../components/shared/right_side_bar/RightSideBar";

const TeacherLayout = ({ children, pageName }) => {
  const { role } = getLocalUser();
  console.log(role);

  if (role !== "teacher") return <Error404 />;

  return (
    <main className="bg-primary-50 h-screen grid grid-cols-[280px_1fr_400px]">
      <Sidebar />
      <section className="h-full overflow-y-auto grid grid-rows-[auto_1fr]">
        {/* for top bar middle */}
        <TopBarMiddle pageName={pageName} />
        <section className="overflow-y-auto px-8 pb-5">{children}</section>
      </section>
      <section className="bg-white h-full overflow-y-auto grid grid-rows-[auto_1fr]">
        {/* for top bar right */}
        <TopBarSide />
        {/* <section className="overflow-y-auto px-6">{<RightSideBar />}</section> */}
      </section>
    </main>
  );
};

export default TeacherLayout;
