<template>
  <nav class="bg-blue-600 text-white shadow-md">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <!-- Logo/Brand -->
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <router-link to="/" class="font-bold text-xl"
            >Contact Manager</router-link
          >
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-4 items-center">
          <router-link
            to="/"
            class="hover:text-blue-200 transition-colors px-3 py-2 rounded-md"
            active-class="bg-blue-700"
          >
            Home
          </router-link>
          <router-link
            to="/about"
            class="hover:text-blue-200 transition-colors px-3 py-2 rounded-md"
            active-class="bg-blue-700"
          >
            About
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>