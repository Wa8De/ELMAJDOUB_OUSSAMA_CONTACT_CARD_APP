<template>
  <nav class="bg-white border-b border-gray-100">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Brand -->
        <div class="flex items-center">
          <div
            class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-md mr-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-[18px] h-[18px] text-[#193cb8]"
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
          </div>
          <router-link to="/" class="text-[17px] font-semibold text-[#193cb8]">
            Contact Manager
          </router-link>
        </div>

        <div class="flex items-center space-x-8">
          <router-link
            to="/"
            class="text-[15px] font-medium text-gray-600 hover:text-gray-800 transition-colors pb-[3px] border-b-2 border-transparent"
            :class="{
              'border-gray-800 !text-[#193cb8] font-semibold':
                $route.path === '/',
            }"
          >
            Home
          </router-link>
          <router-link
            to="/about"
            class="text-[15px] font-medium text-gray-600 hover:text-gray-800 transition-colors pb-[3px] border-b-2 border-transparent"
            :class="{
              'border-gray-800 text-gray-800 font-semibold':
                $route.path === '/about',
            }"
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
