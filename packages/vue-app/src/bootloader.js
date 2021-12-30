import { createApp } from "vue";
import TestApp from "./components/TestApp.vue";
// import router from "./components/router";

export default (refElement) => {
  const app = createApp(TestApp);
  // app.use(router);
  app.mount(refElement);
};
