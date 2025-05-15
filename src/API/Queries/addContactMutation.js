// src/mutations/addContactMutation.js
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { createContact } from "./ContactAPI";

export const useAddContactMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createContact,
    onSuccess: () => {
      queryClient.invalidateQueries(["contacts"]); // refresh contacts list
    },
  });
};
