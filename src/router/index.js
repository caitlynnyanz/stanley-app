import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import StudentPortalView from "../views/StudentPortalView.vue";
import StudentUpdateView from "../views/StudentUpdateView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ProjectsUpdateView from "../views/ProjectsUpdateView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  { path: "/login", name: "login", component: LoginView },
  { path: "/logout", name: "logout", component: LogoutView },
  { path: "/students/:id", name: "student-show", component: StudentPortalView },
  { path: "/students/:id/edit", name: "student-edit", component: StudentUpdateView },
  { path: "/students/:id/projects", name: "projects-show", component: ProjectsView },
  { path: "/students/:id/projects/edit", name: "projects-edit", component: ProjectsUpdateView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
