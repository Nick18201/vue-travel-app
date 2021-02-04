<template>
  <div class="home">
    <div v-for="destination in destinations" :key="destination.name">
      <router-link :to="destination.slug">
        <h2>{{ destination.name }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import store from "@/store.js";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>
