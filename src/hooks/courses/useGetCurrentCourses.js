import { useQuery } from "@tanstack/react-query";
import { serverAddress } from "../../data/serverAddress";

export const useGetCurrentCourses = (id) => {
  const url = `${serverAddress}/courses/current/${id}`;
  const { data, refetch } = useQuery([`currentCourses-${id}`], () =>
    fetch(url).then((res) => res.json())
  );
  return { currentCourses: data?.data, refetch };
};
