<template>
  <div class="min-h-screen p-4">
    <div class="flex w-full justify-end mb-6">
      <button
        @click="isOpen = true"
        class="px-4 py-2 bg-blue-600 text-white rounded-xl flex gap-2 items-center cursor-pointer hover:bg-blue-800"
      >
        <Plus />
        Add Contact
      </button>
    </div>

    <!-- Add Contact Modal -->
    <Modal :open="isOpen" :setOpen="(val) => (isOpen = val)">
      <h2 class="text-xl font-bold mb-4 text-center">Add Contact</h2>
      <AddContact @submit="handleSubmit" />
    </Modal>

    <!-- Edit Contact Modal -->
    <Modal :open="isEditOpen" :setOpen="(val) => (isEditOpen = val)">
      <h2 class="text-xl font-bold mb-4 text-center">Edit Contact</h2>
      <EditContact
        v-if="editingContact"
        :contact="editingContact"
        @submit="handleEditSubmit"
      />
    </Modal>

    <Confirm
      :open="isConfirmOpen"
      :setOpen="(val) => (isConfirmOpen = val)"
      message="Are you sure you want to delete this contact?"
      :handleClick="handleDeleteConfirm"
    />

    <div v-if="isLoading" class="text-center text-gray-500">
      Loading contacts...
    </div>
    <div v-else-if="isError" class="text-center text-red-500">
      Error: {{ error.message }}
    </div>
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <ContactCard
        v-for="contact in contacts"
        :key="contact.id"
        :name="contact.name"
        :email="contact.email"
        :phone="contact.phone"
        @edit="openEditModal(contact)"
        @delete="openConfirmModal(contact)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "../../components/Modals/Modal.vue";
import ContactCard from "../../components/Cards/ContactCard.vue";
import { useGetContacts } from "../../API/Queries/ContactQuery";
import AddContact from "../../components/Forms/AddContact.vue";
import EditContact from "../../components/Forms/EditContact.vue";
import { useAddContactMutation } from "../../API/Queries/addContactMutation";
import { useUpdateContactMutation } from "../../API/Queries/updateContactMutation";
import { deleteContactMutation } from "../../API/Queries/deleteContactMutation";
import { Plus } from "lucide-vue-next";
import { useQueryClient } from "@tanstack/vue-query";
import Confirm from "../../components/Modals/Confirm.vue";
import { toast } from "vue-sonner";

const isOpen = ref(false);
const isEditOpen = ref(false);
const editingContact = ref(null);
const deletingContact = ref(null);
const isConfirmOpen = ref(false);
const queryClient = useQueryClient();

const { data: contacts, isLoading, isError, error } = useGetContacts();

const { mutate: addContact } = useAddContactMutation();
const updateContact = useUpdateContactMutation();
const deleteContact = deleteContactMutation();

const handleSubmit = (newContact) => {
  addContact(newContact);
  isOpen.value = false;
};

const openEditModal = (contact) => {
  editingContact.value = contact;
  isEditOpen.value = true;
};

const handleEditSubmit = async (updatedContact) => {
  console.log({ updatedContact });
  await updateContact.mutateAsync(
    {
      contactId: editingContact.value.id,
      updatedContactData: updatedContact,
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("contacts");
      },
      onError: (error) => {},
    }
  );
  isEditOpen.value = false;
};

const openConfirmModal = (contact) => {
  deletingContact.value = contact;
  isConfirmOpen.value = true;
};

const handleDeleteConfirm = async () => {
  if (deletingContact.value) {
    await deleteContact.mutateAsync(
      {
        contactId: deletingContact.value.id,
      },
      {
        onSuccess: () => {
          toast.success(
            t("ROLE_ACTIONS_FEMININE.DELETE.SUCCESS", {
              role: t("ROLE_ACTIONS_FEMININE.ROLE.ACTUALITE"),
            })
          );
          queryClient.invalidateQueries("contacts");
        },
        onError: (error) => {
          toast.error("Error Occured");
        },
      }
    );
  }
  isConfirmOpen.value = false;
};
</script>
