import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Catch",
      name: "Catch",
      component: () => import("@/views/Catch.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/AccountManagement/Login.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/views/AccountManagement/Signup.vue"),
    },
    {
      path: "/pokedex",
      name: "pokedex",
      component: () => import("@/views/Pokedex.vue"),
    },
    {
      path: "/tamagotchi",
      name: "tamagotchi",
      component: () => import("@/views/Tamagotchi.vue"),
    },
  ],
});

export default router;
