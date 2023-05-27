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
      path: "/trending",
      name: "trending",
      component: () => import("../views/TrendingView.vue"),
    },
    {
      path: "/search/:q",
      name: "search-view",
      component: () => import("../views/SearchView.vue"),
    },
    {
      path: "/watch/:id",
      name: "watch-view",
      component: () => import("../views/WatchView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../components/404.vue"),
    },
  ],
});

export default router;
