import { useQuery } from "@tanstack/react-query";
import { serverAddress } from "../../data/serverAddress";

export const useClassroom = () => {
    const url = `${serverAddress}/classroom/get-admin`;
  const { data, refetch } = useQuery([`classrooms`], () =>
    fetch(url).then((res) => res.json())
  );
  return { classrooms: data, refetch };
};
