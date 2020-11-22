import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./pages/Index.vue"),
  },
  {
    path: "/buttons",
    name: "Home",
    component: () => import("./pages/Buttons.vue"),
  },
  {
    path: "/cards",
    name: "Cards",
    component: () => import("./pages/Cards.vue"),
  },
  {
    path: "/charts",
    name: "Charts",
    component: () => import("./pages/Charts.vue"),
  },
  {
    path: "/forms",
    name: "Forms",
    component: () => import("./pages/Forms.vue"),
  },
  {
    path: "/modals",
    name: "Modals",
    component: () => import("./pages/Modals.vue"),
  },
  {
    path: "/tables",
    name: "Tables",
    component: () => import("./pages/Tables.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
