import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    redirect: "/screen",
    children: [
      {
        path: "/screen",
        component: () => import("@/views/large-screen/index.vue"),
      },
    ],
  },
  {
    path: "/home",
    component: () => import("@/views/home/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
