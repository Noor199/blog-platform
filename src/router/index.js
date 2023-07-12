import { createRouter, createWebHistory } from "vue-router";
import loginPage from "../pages/loginPage.vue";
import blogPage from "../pages/blogPage.vue";

const routes = [
  {
    path: "/",
    name: "loginPage",
    component: loginPage,
  },
  {
    path: "/blog-page",
    name: "BlogPageComponent",
    component: blogPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
