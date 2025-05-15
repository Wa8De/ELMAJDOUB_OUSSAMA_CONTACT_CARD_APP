<!-- src/components/Contact/ContactCard.vue -->
<template>
  <div
    class="border rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white space-y-2 relative"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
      class="w-full object-cover rounded-md mb-3"
      alt="Profile Image"
    />
    <div class="flex items-center gap-2 text-lg font-semibold text-gray-800">
      {{ name }}
    </div>
    <div class="flex items-center gap-2 text-gray-600">
      <Mail class="w-4 h-4 text-green-500" />
      <span>{{ email }}</span>
    </div>
    <div class="flex items-center gap-2 text-gray-600">
      <Phone class="w-4 h-4 text-amber-500" />
      <span>{{ phone }}</span>
    </div>

    <!-- Edit and Delete buttons -->
    <div class="absolute top-3 right-3 flex gap-3">
      <button
        @click.prevent="$emit('edit')"
        aria-label="Edit contact"
        class="text-blue-600 hover:text-blue-800 cursor-pointer"
      >
        <Edit2 class="w-5 h-5" />
      </button>

      <button
        @click.prevent="$emit('delete')"
        aria-label="Delete contact"
        class="text-red-600 hover:text-red-800 cursor-pointer"
      >
        <Trash2 class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { Mail, Phone, Edit2, Trash2 } from "lucide-vue-next";

defineProps({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});
</script>
