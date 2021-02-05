<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link
          :to="{ name: 'DestinationDetails', params: { id: destination.id } }"
        >
          <!-- named routes allow to connect directly to the route without
          knowing the path, then we pass a params to connect the route with
          the id of the destination -->

          <h2>{{ destination.name }}</h2>
        </router-link>
        <figure>
          <router-link
            :to="{ name: 'DestinationDetails', params: { id: destination.id } }"
          >
            <!-- we add th id with params: to show the correct details
          depending of the destination id  -->
            <img
              :src="require(`@/assets/${destination.image}`)"
              alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
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

<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  max-width: 200px;
}
.destinations {
  display: flex;
  justify-content: space-between;
}
a {
  color: lightseagreen;
  text-decoration: none;
}
a:hover,
a:visited {
  text-decoration: underline;
}
</style>
