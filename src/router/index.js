import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/Register.vue";
import MyPage from "../views/MyPage.vue";
import Home from "../views/Home.vue";
import Login from "../views/LogIn.vue";
import Shops from "../views/Shops.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Register",
    name: "Register",
    component: Register
  },
  {
    path: "/MyPage",
    name: "MyPage",
    component: MyPage
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Login",
    name: "LogIn",
    component: Login
  },
  {
    path: "/Shops",
    name: "Shops",
    component: Shops
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
