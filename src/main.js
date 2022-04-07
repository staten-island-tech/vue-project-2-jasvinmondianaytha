import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores/index";
import pokedex from "./stores/pokedex";

const app = createApp(App);
app.use(router).use(store).use(pokedex).mount("#app");
