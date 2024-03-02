import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/Home/Home.vue"),
        },
        {
          path: "/contact",
          name: "contact",
          component: () => import("../views/Contact/Contact.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register/Register.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("../views/Error/Error.vue"),
    },
  ],
});

export default router;
