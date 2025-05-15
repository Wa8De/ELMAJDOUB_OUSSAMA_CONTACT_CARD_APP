<!-- src/App.vue -->
<template>
  <router-view />
  <Toaster />
</template>

<script setup>
import { Toaster } from "vue-sonner";

// Rien à importer ici si le layout est dans chaque vue
</script>

<style>
/* Tu peux laisser vide ou mettre du global ici si besoin */
</style>
