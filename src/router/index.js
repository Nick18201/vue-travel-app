import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/details/:id",
    name: "DestinationDetails",
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails.vue"
      )
  }
  // we add /:id that we implement back in data() of DestinationDetails.vue
];

const router = new VueRouter({
  linkExactActiveClass: "active-class",
  // allow router to custom class name for automatic active class
  // so when you have an active tab the css class switch to the desired class
  // to change the styling
  routes
});

export default router;
