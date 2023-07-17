import { useEffect, useState } from "react";
import FeesSummarySemesterWise from "./FeesSummarySemesterWise";
import { serverAddress } from "../../../data/serverAddress";
import { getLocalUser } from "../../../utils/localStorage";
import { toast } from "react-hot-toast";
import { toastConfig } from "../../../utils/toastConfig";
import FeesTable from "./FeesTable";

const FeesAndWaiverBody = () => {
  const { id } = getLocalUser();
  const [feesInfo, setFeesInfo] = useState({});

  useEffect(() => {
    const url = `${serverAddress}/get-student/fees/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.okay) {
          setFeesInfo(res.data);
        } else {
          toast.error(res.msg, toastConfig);
        }
      });
  }, [id]);

  return (
    <section>
      <FeesSummarySemesterWise stat={feesInfo?.stat} />
      <FeesTable transactions={feesInfo?.transactions} />
    </section>
  );
};
export default FeesAndWaiverBody;
