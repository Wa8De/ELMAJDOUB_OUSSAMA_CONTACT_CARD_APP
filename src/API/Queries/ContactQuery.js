// src/queries/ContactQuery.js
import { useQuery } from "@tanstack/vue-query";
import { getContacts } from "./ContactAPI";

export const useGetContacts = () => {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });
};
