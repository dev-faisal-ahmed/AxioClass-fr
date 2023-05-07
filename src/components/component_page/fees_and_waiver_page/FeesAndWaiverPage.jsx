import React from "react";
import "./feesAndWaiverPage.css";
import { feesDataSemWise } from "../../../fake_data/feesData";
import { Nav } from "../../shared/nav/Nav";
import { feesAndWaiverCard } from "../../../utilities/UI";

export const FeesAndWaiverPage = () => {
  // ********** functions ********** \\
  return (
    <section className="page-body">
      <Nav />
      <section className="feesAndWaiverPage mt-30">
        {feesDataSemWise.map((sem, index) =>
          feesAndWaiverCard({
            index,
            semName: sem.semName,
            demand: sem.demand,
            waiver: sem.waiver,
            paid: sem.paid,
            due: sem.due,
          })
        )}
      </section>
    </section>
  );
};
