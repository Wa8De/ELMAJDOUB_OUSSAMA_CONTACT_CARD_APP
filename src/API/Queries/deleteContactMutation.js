import { useMutation } from "@tanstack/vue-query";
import { deleteContact } from "./ContactAPI";

export const deleteContactMutation = () => {
  return useMutation({
    mutationKey: "deleteContact",
    mutationFn: async ({ contactId }) => {
      const deleted = await deleteContact(contactId);
      return deleted;
    },
  });
};
