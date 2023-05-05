import React from "react";
import { AllNotices } from "./notice/AllNotices";
import Nav from "../../shared/nav/Nav";
import "./homePage.css";
import Cgpa from "./cgpa/Cgpa";
import { FeesSummary } from "./fees_summary/FeesSummary";

export function HomePage() {
  return (
    <section className="page-body">
      <Nav />
      <section className="homePage__body">
        <FeesSummary />
        <Cgpa />
        <AllNotices />
      </section>
    </section>
  );
}
