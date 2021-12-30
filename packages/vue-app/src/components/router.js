import { createRouter, createWebHistory } from "vue-router";
import HomeNav from "./HomeNav.vue";
import AngularApp from "./AngularApp.vue";
import ReactApp from "./ReactApp.vue";

const routes = [
  {
    path: "/",
    name: "HomeNav",
    component: HomeNav,
  },
  {
    path: "/angular",
    name: "angularApp",
    component: AngularApp,
  },
  {
    path: "/react",
    name: "ReactApp",
    component: ReactApp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
