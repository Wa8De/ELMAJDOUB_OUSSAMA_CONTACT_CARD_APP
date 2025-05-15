import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { updateContact } from "./ContactAPI";

export const useUpdateContactMutation = () => {
  return useMutation({
    mutationKey: "updateContact",
    mutationFn: async ({ contactId, updatedContactData }) => {
      const updated = await updateContact(contactId, updatedContactData);
      return updated;
    },
  });
};
