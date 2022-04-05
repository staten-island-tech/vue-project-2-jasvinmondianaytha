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
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/game",
      name: "game",
      component: () => import("../views/Game.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/Signup.vue"),
    },
    {
      path: "/pokedex",
      name: "pokedex",
      component: () => import("../views/Pokedex.vue"),
    },
    {
      path: "/gen1",
      name: "gen1",
      component: () => import("../views/Gen1.vue"),
    },
    {
      path: "/gen2",
      name: "gen2",
      component: () => import("../views/Gen2.vue"),
    },
    {
      path: "/gen3",
      name: "gen3",
      component: () => import("../views/Gen3.vue"),
    },
    {
      path: "/gen4",
      name: "gen4",
      component: () => import("../views/Gen4.vue"),
    },
    {
      path: "/gen5",
      name: "gen5",
      component: () => import("../views/Gen5.vue"),
    },
    {
      path: "/gen6",
      name: "gen6",
      component: () => import("../views/Gen6.vue"),
    },
    {
      path: "/gen7",
      name: "gen7",
      component: () => import("../views/Gen7.vue"),
    },
    {
      path: "/gen8",
      name: "gen8",
      component: () => import("../views/Gen8.vue"),
    },
  ],
});

export default router;
