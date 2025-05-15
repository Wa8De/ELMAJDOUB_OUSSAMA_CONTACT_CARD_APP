// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css"; // si tu utilises Tailwind CSS
import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";

const queryClient = new QueryClient();

createApp(App).use(VueQueryPlugin, { queryClient }).use(router).mount("#app");
