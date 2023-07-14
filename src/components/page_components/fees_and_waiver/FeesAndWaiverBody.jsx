import { useEffect, useState } from "react";
import FeesGraph from "./FeesGraph";
import FeesSummarySemesterWise from "./FeesSummarySemesterWise";
import { serverAddress } from "../../../data/serverAddress";
import { getLocalUser } from "../../../utils/localStorage";
import { toast } from "react-hot-toast";
import { toastConfig } from "../../../utils/toastConfig";

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
      <FeesGraph />
    </section>
  );
};
export default FeesAndWaiverBody;
