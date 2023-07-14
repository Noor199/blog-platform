import router from "./router/index";
import { createStore } from "vuex";
import { createApp } from "vue";
import "./assets/css/main.css";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      blogs: [],
      selectedBlog: -1,
      authLogin: { username: "", password: "" },
    };
  },
});

createApp(App).use(router).use(store).mount("#app");
