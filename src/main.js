import router from "./router/index";
import { createStore } from "vuex";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

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
