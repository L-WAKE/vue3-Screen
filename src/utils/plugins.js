import router from "@/router";
import pinia from "@/store";
//引入element-plus
import ElementPlus from "element-plus";

export default {
  install(app, options) {
    app.use(router);
    app.use(pinia);
    app.use(ElementPlus);
  },
};
