import { createApp } from "vue";
import { createPinia } from "pinia";
import { useFirebaseStore } from "./stores/firebase-store";
import { auth } from "./firebase/config.js";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
