import { createRouter, createWebHistory } from "vue-router";
import loginPage from "../pages/loginPage.vue";
import blogPage from "../pages/blogPage.vue";
import blogDetails from "../pages/blogDetails.vue";
import blogAction from "../pages/blogAction.vue";

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
  {
    path: "/blog-details",
    name: "blogDetailsComponent",
    component: blogDetails,
  },
  {
    path: "/blog-action",
    name: "blogActionComponent",
    component: blogAction,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
