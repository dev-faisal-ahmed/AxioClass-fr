import { useQuery } from "@tanstack/react-query";
import { serverAddress } from "../../data/serverAddress";

export const useGetPaymentStat = () => {
  const url = `${serverAddress}/transaction/get-stat/`;
  const { data, refetch } = useQuery([`adminTransactionStat`], () =>
    fetch(url).then((res) => res.json())
  );
  return { paymentStat: data, refetch };
};
