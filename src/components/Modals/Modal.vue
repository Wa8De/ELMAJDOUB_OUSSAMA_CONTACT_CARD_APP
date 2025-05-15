<!-- src/components/Ui/Modal.vue -->
<template>
  <transition name="fade">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <!-- Overlay -->
      <div
        class="bg-black inset-0 absolute opacity-75"
        @click="setOpen(false)"
      />

      <!-- Modal Content -->
      <div
        class="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6 relative z-10"
        @click.stop
      >
        <!-- Default Slot -->
        <slot />
      </div>
    </div>
  </transition>
</template>

<script setup>
import { X } from "lucide-vue-next";

defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  setOpen: {
    type: Function,
    required: true,
  },
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
