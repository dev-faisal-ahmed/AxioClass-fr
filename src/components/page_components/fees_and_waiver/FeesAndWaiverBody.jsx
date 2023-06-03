import FeesGraph from "./FeesGraph";
import FeesSummarySemesterWise from "./FeesSummarySemesterWise";

const FeesAndWaiverBody = () => {
  return (
    <section>
      <FeesSummarySemesterWise />
      <FeesGraph />
    </section>
  );
};
export default FeesAndWaiverBody;
