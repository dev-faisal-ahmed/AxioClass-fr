import { useQuery } from "@tanstack/react-query";
import { serverAddress } from "../../data/serverAddress";

export const useGetPaymentInfo = (id) => {
  const url = `${serverAddress}/payment/student/${id}`;
  const paymentInfo = useQuery([`payment-info-${id}`], () => fetch(url).then((res) => res.json()));
  return paymentInfo;
};
