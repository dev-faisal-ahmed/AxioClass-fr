import FeesGraph from "./FeesGraph";
import FeesSummarySemesterWise from "./feesSummarySemesterWise";

const FeesAndWaiverBody = () => {
  return (
    <section>
      <FeesSummarySemesterWise />
      <FeesGraph />
    </section>
  );
};
export default FeesAndWaiverBody;
