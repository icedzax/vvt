import { createRouter, createWebHashHistory } from "vue-router";

const response = await fetch(`/src/mockroutes.json`);
const routesJson = await response.json();
const nroute = routesJson.map((item) => ({
  ...item,
  component: () => import(`/src/views/${item.name}.vue`),
}));

console.log(nroute);

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: "active",
  routes: nroute,
});
export default router;
