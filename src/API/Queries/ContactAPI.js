import axiosInstance from "../axiosInstance";

export const getContacts = async () => {
  try {
    const response = await axiosInstance.get("/contacts");
    return response.data;
  } catch (error) {
    console.error("Error Fetching contacts:", error);
    throw error;
  }
};

export const createContact = async (contact) => {
  try {
    const response = await axiosInstance.post("/contacts", contact);
    return response.data;
  } catch (error) {
    console.error("Error adding contact:", error);
    throw error;
  }
};

export const updateContact = async (contactId, updatedContactData) => {
  try {
    const response = await axiosInstance.put(
      `/contacts/${contactId}`,
      updatedContactData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating contact:", error);
    throw error;
  }
};

export const deleteContact = async (contactId) => {
  try {
    const response = await axiosInstance.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting contact:", error);
    throw error;
  }
};
