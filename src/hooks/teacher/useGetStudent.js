import { useQuery } from "@tanstack/react-query";
import { serverAddress } from "../../data/serverAddress";

const useGetTeacher = (id) => {
  const url = `${serverAddress}/get-teacher/${id}`;
  const { data, refetch } = useQuery([`teacher-info${id}`], () =>
    fetch(url).then((res) => res.json())
  );
  console.log(data)
  return { teacherInfo: data?.data, refetch }; // all the data came
};

export default useGetTeacher;
