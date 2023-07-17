import { useQuery } from "@tanstack/react-query";
import { serverAddress } from "../../data/serverAddress";

const useGetStudent = (id) => {
  const url = `${serverAddress}/get-student/${id}`;
  const { data, refetch } = useQuery([`student-info${id}`], () =>
    fetch(url).then((res) => res.json())
  );
  console.log(data)
  return { studentInfo: data?.data, refetch }; // all the data came
};

export default useGetStudent;
