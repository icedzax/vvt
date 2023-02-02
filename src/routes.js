import { createRouter, createWebHashHistory } from "vue-router";

import genRoute from "./routes/genRoute";
import generateRoutes from "./routes/generateRoutes";
const routes = [
  {
    path: "/about",
    name: "About",
    component: () => import(`/src/views/about.vue`),
  },
  {
    path: "/",
    name: "Home",
    component: () => import(`/src/views/home.vue`),
  },

  generateRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: "active",
  routes: routes,
});
export default router;
