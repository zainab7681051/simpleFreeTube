import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
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
      path: "/search",
      name: "search-view",
      props: (route) => ({ query: route.query.q }),
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
