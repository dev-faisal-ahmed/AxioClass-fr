import { useQuery } from "@tanstack/react-query";
import { serverAddress } from "../../data/serverAddress";

export const useGetTransactionAdmin = () => {
  const url = `${serverAddress}/transaction/history/all`;
  const { data, refetch } = useQuery([`adminTransactionHistory`], () =>
    fetch(url).then((res) => res.json())
  );

  return { transactionHistory: data?.data, refetch };
};
