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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/safari",
      name: "safari",
      component: () => import("@/views/SafariView.vue"),
    },
    {
      path: "/box",
      name: "box",
      component: () => import("@/views/BoxView.vue"),
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
  ],
});

export default router;
