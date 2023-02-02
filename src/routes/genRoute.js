const response = await fetch(`/src/mockroutes.json`);
const routesJson = await response.json();

const route = routesJson.children.map((item) => ({
  ...item,
  component: () => import(`/src/views/${item.name}.vue`),
}));

const genRoute = { ...routesJson, children: route };

export default genRoute;
