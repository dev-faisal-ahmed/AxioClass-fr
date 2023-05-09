import React from "react";
import { Sidebar } from "../../components/shared/sidebar/Sidebar";
import { TopBarMiddle } from "../../components/shared/top_bar/TopBarMiddle";
import { TopBarSide } from "../../components/shared/top_bar/TopBarSIde";

export const GlobalLayout = ({ body, side }) => {
  return (
    <section className=" bg-primary-50 h-screen grid grid-cols-[300px_1fr_400px]">
      <Sidebar />
      <section>
        {/* for top bar middle */}
        <TopBarMiddle />
        <section className="overflow-y-auto">{body}</section>
      </section>
      <section className="bg-white">
        {/* for top bar right */}
        <TopBarSide />
        <section className="overflow-y-auto">{side}</section>
      </section>
    </section>
  );
};
