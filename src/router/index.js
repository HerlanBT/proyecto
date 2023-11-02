import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/aplicacion",
      name: "galeria",
      component: () => import("../views/galeria.vue"),
      props: true
    },
    {
      path: "/capitulo1",
      name: "capitulo1",
      component: () => import("../views/capitulo1.vue"),
    },
    {
      path: "/capitulo2",
      name: "capitulo2",
      component: () => import("../views/capitulo2.vue"),
    },
    {
      path: "/capitulo3",
      name: "capitulo3",
      component: () => import("../views/capitulo3.vue"),
    },
    {
      path: "/capitulo4",
      name: "capitulo4",
      component: () => import("../views/capitulo4.vue"),
    },
    {
      path: "/",
      name: "caratula",
      component: () => import("../views/caratula.vue"),
    },
    {
      path: '/detalle/:nombre',
      name: 'detalle',
      component: () => import("../views/detalleapp.vue"),
      props: true
    },
  ],
});

export default router;
