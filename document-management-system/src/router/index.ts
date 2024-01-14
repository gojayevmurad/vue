/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  NavigationGuardNext,
  RouteLocationNormalized,
  createRouter,
  createWebHistory,
} from "vue-router";

import DashboardViewVue from "../Views/Dashboard/DashboardView.vue";
import NotFoundViewVue from "../Views/NotFound/NotFoundView.vue";

const checkAuth = (
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const isAuth = true;

  if (isAuth) next();
  else next({ name: "not-found" });
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      sensitive: true,
      name: "dashboard",
      component: DashboardViewVue,
      beforeEnter: [checkAuth],
    },
    // not found handler
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundViewVue,
    },
  ],
});

router.beforeEach((to, _from, next) => {
  console.log(to);
  next();
});

router.afterEach((to, _from) => {
  console.log(to);
});

export default router;
