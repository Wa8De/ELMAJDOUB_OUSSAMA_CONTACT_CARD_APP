<template>
  <form class="space-y-5" @submit.prevent="submitForm">
    <!-- Name -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
      <input
        v-model="form.name"
        type="text"
        class="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-md text-gray-800 text-sm transition-all focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
        placeholder="John Doe"
      />
    </div>

    <!-- Email -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
      <input
        v-model="form.email"
        type="email"
        class="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-md text-gray-800 text-sm transition-all focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
        placeholder="john@example.com"
      />
    </div>

    <!-- Phone -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
      <input
        v-model="form.phone"
        type="text"
        class="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-md text-gray-800 text-sm transition-all focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
        placeholder="06XXXXXXXX"
      />
    </div>

    <!-- Submit Button -->
    <div class="text-right pt-2">
      <button
        type="submit"
        class="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors duration-200 inline-flex items-center justify-center"
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