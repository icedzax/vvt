const response = await fetch(`/src/menu.json`);
const routesJson = await response.json();

const route = routesJson;
const generated = {};
const appPath = "/src/views/app";
const indexVue = "/IndexView.vue";

const capitalize = (str) => {
  if (typeof str === "string") {
    return str.replace(/^\w/, (c) => c.toUpperCase());
  } else {
    return "";
  }
};

if (route.menuLevel === 0) {
  generated.path = route.rootPath;
  generated.name = route.menuName;
  generated.children = [
    {
      path: "",
      name: capitalize(route.menuName) + "IndexView",
      component: () => import("@/layouts/MainLayout.vue"),
      meta: {
        screen: "IndexView",
        hasPermission: "",
      },
    },
  ];
}

route.submenu.forEach((s) => {
  if (s.submenu) {
    s.submenu.forEach((s2) => {
      generated.children.push({
        path: s2.rootPath.replace("/receive/", "").toLowerCase(),
        name: capitalize(s2.menuName.toLowerCase()),
        stringComponent: `${appPath}${s2.rootPath.toLowerCase()}${indexVue}`,
        component: () =>
          import(`${appPath}${s2.rootPath.toLowerCase()}${indexVue}`),
        meta: {
          screen: "",
          hasPermission: "",
        },
      });
    });
  }
});

const generateRoutes = generated;
// const generateRoutes = routesJson

console.log(generateRoutes);

export default generateRoutes;
