<!-- src/components/Contact/EditContact.vue -->
<template>
  <form class="space-y-4" @submit.prevent="submitForm">
    <!-- Name -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
      <input
        v-model="form.name"
        type="text"
        class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <!-- Email -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
        v-model="form.email"
        type="email"
        class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <!-- Phone -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
      <input
        v-model="form.phone"
        type="text"
        class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <!-- Submit Button -->
    <div class="text-right pt-2">
      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Update
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, watch, toRefs } from "vue";

const props = defineProps({
  contact: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["submit"]);

const form = ref({
  name: "",
  email: "",
  phone: "",
  image: "",
});

// Prefill form when prop changes
watch(
  () => props.contact,
  (newVal) => {
    if (newVal) {
      form.value = {
        name: newVal.name || "",
        email: newVal.email || "",
        phone: newVal.phone || "",
        image: newVal.image || "",
      };
    }
  },
  { immediate: true }
);

const submitForm = () => {
  emit("submit", { ...form.value, id: props.contact.id });
};
</script>
