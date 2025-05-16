<!-- src/components/Ui/Confirm.vue -->
<template>
  <Modal :open="open" :setOpen="setOpen">
    <div class="text-center">
      <p class="mb-6 text-lg font-semibold">{{ message }}</p>
      <div class="flex justify-center gap-4">
        <button
          class="px-4 py-2 rounded-xl bg-gray-300 hover:bg-gray-400 cursor-pointer"
          @click="setOpen(false)"
        >
          Cancel
        </button>
        <button
          class="px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 cursor-pointer"
          @click="handleConfirm"
        >
          Confirm
        </button>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import Modal from "./Modal.vue";

const props = defineProps({
  open: { type: Boolean, required: true },
  setOpen: { type: Function, required: true },
  message: { type: String, default: "Are you sure?" },
  handleClick: { type: Function, required: true },
});
const handleConfirm = () => {
  props.handleClick();
  props.setOpen(false);
};
</script>
