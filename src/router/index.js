import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Navigation/Layout.vue";
import Home from "../Pages/Home/Home.vue";

const routes = [
  {
    path: "/",
    component: Layout, // Layout global
    children: [
      {
        path: "", // / => Home
        name: "Home",
        component: Home,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
