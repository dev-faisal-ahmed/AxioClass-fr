import { useQuery } from "@tanstack/react-query";
import { serverAddress } from "../../data/serverAddress";

export const useActivities = () => {
    const url = `${serverAddress}/activities`;
  const { data, refetch } = useQuery([`latestActivities`], () =>
    fetch(url).then((res) => res.json())
  );
  return { activities: data, refetch };
};
