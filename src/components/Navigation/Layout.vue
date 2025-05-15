<template>
  <div>
    <Navbar />

    <main class="p-4">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>
