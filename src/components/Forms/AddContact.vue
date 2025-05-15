<template>
  <form class="space-y-4" @submit.prevent="submitForm">
    <!-- Name -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
      <input
        v-model="form.name"
        type="text"
        class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="John Doe"
      />
    </div>

    <!-- Email -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
        v-model="form.email"
        type="email"
        class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="john@example.com"
      />
    </div>

    <!-- Phone -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
      <input
        v-model="form.phone"
        type="text"
        class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="06XXXXXXXX"
      />
    </div>

    <!-- Submit Button -->
    <div class="text-right pt-2">
      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  phone: "",
  image: "",
});

const emit = defineEmits(["submit"]);

const submitForm = () => {
  emit("submit", form.value);
};
</script>