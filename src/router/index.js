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
    path: "/details/:slug",
    name: "DestinationDetails",
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails.vue"
      )
  }
  // we add to details path a /:id that we implement back in data() of DestinationDetails.vue
  // as we want to show the destination name we can change to slug
];

const router = new VueRouter({
  linkExactActiveClass: "active-class",
  // allow router to custom class name for automatic active class
  // so when you have an active tab the css class switch to the desired class
  // to change the styling
  routes
});

export default router;
