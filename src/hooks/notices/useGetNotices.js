import { useQuery } from "@tanstack/react-query";
import { serverAddress } from "../../data/serverAddress";

export const useGetNotices = () => {
  const url = `${serverAddress}/notice`;
  const { data, refetch } = useQuery([`all-notices`], () =>
    fetch(url).then((res) => res.json())
  );
  return { notices: data?.data || [], refetch };
};
