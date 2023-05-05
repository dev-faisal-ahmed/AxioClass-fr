import React from "react";
import { AllNotices } from "./notice/AllNotices";
import "./homePage.css";
import {Cgpa} from "./cgpa/Cgpa";
import { FeesSummary } from "./fees_summary/FeesSummary";
import { Nav } from "../../shared/nav/Nav";
import { ToDos } from "./toDos/ToDos";

export function HomePage() {
  return (
    <section className="homePage">
      <Nav/>
      <section className="homePage__body">
        <FeesSummary />
        <Cgpa />
        <AllNotices />
      </section>
      <section className="homePage__toDos">
        <ToDos/>
      </section>
    </section>
  );
}
