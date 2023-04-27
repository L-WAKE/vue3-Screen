import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    redirect: "/screen",
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
  {
    path: "/screen",
    component: () => import("@/views/large-screen/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
