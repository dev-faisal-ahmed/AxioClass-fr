import React from "react";
import { AllNotices } from "./notice/AllNotices";
import Nav from "../../shared/nav/Nav";
import "./homePage.css";
import Cgpa from "./cgpa/Cgpa";

export function HomePage() {
  return (
    <section className="homePage">
      <Nav />
      <section>
        <Cgpa />
        <AllNotices />
      </section>
    </section>
  );
}
