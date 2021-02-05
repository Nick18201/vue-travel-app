import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */ "@/views/DestinationDetails.vue"
      ),
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () =>
          import(
            /*webpackChunkName: "ExperienceDetails"*/ "@/views/ExperienceDetails"
          )
      }
    ]
  }
  // we add to details path a /:id that we implement back in data() of DestinationDetails.vue
  // as we want to show the destination name we can change to slug
];

const router = new VueRouter({
  mode: "history",
  // mode history removes the # that simulate the full url
  linkExactActiveClass: "active-class",
  // allow router to custom class name for automatic active class
  // so when you have an active tab the css class switch to the desired class
  // to change the styling
  routes
});

export default router;
