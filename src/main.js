import router from "./router/index";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

import { createStore } from "vuex";
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
